import React, { useState, useEffect } from "react";
import Answer from "../Answer/Answer";
import Reply from "../Reply/Reply";
import "./AnswersByIdThread.css";
import { questionsData } from "../../mock/data";

const AnswersByIdThreads = ({ questionId, answersData }) => {
	//const [answersData, setAnswersData] = useState(questionsData.answer);

	//fetch(questionId);
	// function fetchingAnswers() {
	// 	fetch(questionId)
	// 		.then((res) => res.json())
	// 		.then((data) => setAnswersData(data));
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

	return (
		<div>
			<h4>
				{answersData.length === 0
					? `${answersData.length} Answers`
					: `${answersData.length} Answers`}
			</h4>
			<div className="answersFormat">
				{answersData.map((answer) => {
					return <Answer key={answer.id} data={answer} />;
				})}
				{/* <Reply onPress={handleSendReply} /> */}
			</div>
		</div>
	);
};

export default AnswersByIdThreads;