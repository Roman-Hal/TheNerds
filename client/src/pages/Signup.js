import React, { useState } from "react";
import { Navigate } from "react-router-dom";
//import { Link } from "react-router-dom";

import Navigation from "./Navigation";

import "./Home.css";

const Signup = () => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();


	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await (await fetch("http://localhost:3100/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		})).json();

		if(!result.error) {
			console.log(result.message);
			Navigate("/");
		} else {
			console.log(result.error);
		}
	};


  return (
    <main className="main" role="main">
		<Navigation />
			<div>
				<h1>TheNerds APP</h1>
				<form onSubmit={ handleSubmit } >
                    <div>
						<label htmlFor='username' className="formLabel">Username</label>
						<input type="text" id='username' placeholder='Username' className="formInput" onChange={(e) => setUsername(e.target.value)} />
					</div>
                    <div>
						<label htmlFor='email' className="formLabel">E-mail</label>
						<input type="email" id='username' placeholder='email' className="formInput" onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div>
						<label htmlFor='password' className="formLabel">Password</label>
						<input type="password" id='password' placeholder='Password' className="formInput" onChange={(e) => setPassword(e.target.value)} />
					</div>
						<button type="submit">Sign Up</button>
					</form>
			</div>
		</main>
  );
};

//<Link to="/"><button>Sign Up</button></Link>
export default Signup;