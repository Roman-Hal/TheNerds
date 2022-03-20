import { Router } from "express";
import { questionsData } from "./Mock/Data";
import db from "./db";
const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

const questionsQuery = "SELECT * FROM questions";
const answersQuery = "SELECT * FROM answers";
router.get("/questions", async (req, res) => {
	try {
		const result = await db.query(questionsQuery);
		res.json(result.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});
router.get("/answers", async (req, res) => {
	try {
		const result = await db.query(answersQuery);
		res.json(result.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

const isValid = (n) => {
	return !isNaN(n) && n >= 0;
};
//getting questions by id //
router.get("/questions/:id", async (req, res) => {
	const questionsId = req.params.id;
	const questionsById = `SELECT * FROM questions WHERE id=${questionsId}`;
	const checkIfExists = `select exists(select 1 from questions where id=${questionsId})`;
	if (!isValid(questionsId)) {
		res.status(400).json({ "Server message": "Invalid id!" });
	} else {
		db.query(checkIfExists).then((result) => {
			const exists = result.rows.map((el) => el.exists);
			let doesExist = exists.pop();
			if (!doesExist) {
				res
					.status(404)
					.json({
						message: `A question by the id ${questionsId} does not exist!`,
					});
			} else {
				db.query(questionsById)
					.then((result) => res.json(result.rows))
					.catch((e) => console.error(e));
			}
		});
	}

});

export default router;
