//import { RestartProcess } from "concurrently";
import { Router } from "express";
import jwt from "jsonwebtoken";
import /*bcrypt,*/ { hash, compare } from "bcryptjs";
//import asyncHandler from "express-async-handler";
//import cors from "cors";
//import app from "./app";

const router = Router();

const users = [
	{
	username: "Huhu",
	email: "test@123.test",
	password: "$2a$10$t/9aytkxdQz8j27dDttVnek/fRqSiJnco9BgxwAmldZYj3WsW8UXK", //pass "test123"
},
];

/*router.get("/", verifyToken, (_, res) => {
	res.json({ message: "Hello, world!" });
});*/

router.get("/", verifyToken, (req, res) => {
	jwt.verify(req.token, "secretkey", (err, authData) => {
		if(err) {
			res.sendStatus(403);
		} else {
			res.json({
				msg: "Hello, world!",
				authData,
			});
		}
	});
});

router.get("/users", (req, res) => {
	res.status(200).json(users);
});

/*router.post("/register", asyncHandler (async (req, res) => {
	const { username, email, password } = req.body;

	if(!username || !email || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}
	res.json({ msg: "User registered!" });
}));*/
router.post("/register", async (req, res) => {
	const { username, email, password } = req.body;
	try {

		const user = users.find((user) => user.email === email);
		if(user){
			throw new Error("email already registered");
		} else {

		const hashedPassword = await hash(password, 10);

		users.push({
			username,
			email,
			password: hashedPassword,
		});
		res.status(200).json({ msg: "User created" });
		console.log(users);
	}
	/*}
	catch (err) {
		res.json({ error: `${err.message}` });
	}*/
	} catch (err) {
		res.json({ msg: "Please fill all fields!" });
		//throw new Error({ error: `${ err }` });
	}
});

/*router.get("/login", (req, res) => {
	res.json({
		token: "test123",
	});
});*/

/*router.post("/login", (req, res) => {
	let data = users.find((user) => user.email === req.body.email);
	if(data) {
		if(data.password === req.body.password) {
			/*res.status(200).json( {
				msg: "Login successful!",
			});*/
			//JWT using timer
			/*jwt.sign({ data }, "secretkey", { expiresIn: "30s" }, (err, token) => {
				res.json({ msg: "Login successful", token });
			});*/
			/*jwt.sign({ data }, "secretkey", (err, token) => {
				res.json({ msg: "Login successful", token });
			});
		} else {
			res.status(200).json( {
				msg: "Wrong password!",
			});
		}
	} else {
		res.status(200).json( {
			msg: "User not found!",
		});
	}
});*/

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
	let data = users.find((user) => user.email === email);
	if(data) {
		const valid = await compare(password, data.password);
		if(valid) {
			/*res.status(200).json( {
				msg: "Login successful!",
			});*/
			//JWT using timer
			/*jwt.sign({ data }, "secretkey", { expiresIn: "30s" }, (err, token) => {
				res.json({ msg: "Login successful", token });
			});*/
			jwt.sign({ data }, "secretkey", (err, token) => {
				res.json({ msg: "Login successful", token });
			});
		} else {
			res.status(200).json( {
				msg: "Wrong password!",
			});
		}
	} else {
		res.status(200).json( {
			msg: "User not found!",
		});
	}
} catch (err) {
	res.json({ msg: `${err}` });
}
});

//app.post("/logout", )

// Token format
// Authorization: Bearer <access_token>

//verify token
function verifyToken(req, res, next) {
	//get authentication header value
	const bearerHeader = req.headers["authorization"];
	//Check if bearer is undefined
	if(typeof bearerHeader !== "undefined") {
		//Split at the space
		const bearer = bearerHeader.split(" ");
		//Get token from array
		const bearerToken = bearer[1];
		//Set token
		req.token = bearerToken;
		//Next middleware
		next();
	} else {
		//Forbidden
		res.status(403).json({ msg: "not authorized!" });
	}
}

export default router;
