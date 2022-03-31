import React, { useState, useEffect } from "react";
import Answer from "../Answer/Answer";
//import Reply from "../Reply/Reply";
import "./AnswersByIdThread.css";
//import { questionsData } from "../../mock/data";

const api = process.env.API_URL || "/api";
const AnswersByIdThreads = ({ questionId }) => {
	const [answers, setAnswers] = useState([]);

	// console.log(questionId);
	// fetch(questionId);
	// function fetchingAnswers() {
	// 	fetch(questionId)
	// 		.then((res) => res.json())
	// 		.then((data) => setAnswers(data));
	// }

	// const handleSendReply = (answer) => {
	// 	fetch
	// 		.post(answer)
	// 		.then()
	// 		.then(() => fetchingAnswers())
	// 		.catch();
	// };

	// useEffect(() => {
	// 	fetchingAnswers();
	// }, []);

	useEffect(() => {
		fetch(`${api}/answers/${questionId}`)
			.then((res) => res.json())
			.then((data) => setAnswers(data))
			.catch((err) => console.error(err));
	}, [questionId]);

	console.log(answers);
	return (
		<div>
			<h4>Answer(s)</h4>
			<div className="answersFormat">
				{/* {answers.map((answer) => { */}
					<Answer key={questionId} data={answers} />
				{/* })} */}
				{/* <Reply onPress={handleSendReply} /> */}
			</div>
		</div>
	);
};

export default AnswersByIdThreads;
