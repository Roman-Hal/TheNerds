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

//Api endpoint for updating questions

router.patch ("/questions", (req, res) => {
	const updatedTitle = req.body.title;
	const updatedQuestion = req.body.question_content;
	const id = req.body.id;
	console.log(req.body.title)
	let updateQuestionQuery;
	if (updatedTitle) updateQuestionQuery = `UPDATE questions SET title=${updatedTitle}, question_content=${updatedQuestion} WHERE id=${id}`;
    else if (!updatedTitle) updateQuestionQuery = `UPDATE questions SET question_content=${updatedQuestion} WHERE id=${id}`;
	db.query(updateQuestionQuery)
	.then(() => {
		res.status(201).json({message: "Your Question is Successfully Updated!"})
	})
})










// Endpoint post 






//Endoint to edit user's question    

// router.put ('/userAsked/:id', async (req, res) => {
// 	console.log ('body = ' + req.body.question + 'params-id = ' + req.params.id);
// 	try {
// 	  const id = req.params.id;
// 	  const question = req.body.question;
// 	  const updateQuestion = await db.query (
// 		'update question set question = $1 where id = $1',
// 		[question, id]
// 	  );
// 	  res.json ('Question updated');
// 	} catch (err) {
// 	  console.error (err.message);
// 	}
//   });


//Endoint to edit a user's answer          

// router.put ('/userAnswers/:id', async (req, res) => {
//   console.log ('body = ' + req.body + 'params-id = ' + req.params.id);
//   try {
//     const id = req.params.id;
//     const answer = req.body.answer;
//     const updateAnswer = await db.query (
//       'update answer set answer = $1 where id = $2',
//       [answer, id]
//     );
//     res.json ('Answer updated');
//   } catch (err) {
//     console.error (err.message);
//   }
// });



export default router;
