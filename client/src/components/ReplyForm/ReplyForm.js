import React, { useState } from "react";
import AnswersByIdThreads from "../AnswersById/AnswersByIdThreads";

const ReplyForm = ({ replyData }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [updatedAnswersData, setUpdatedAnswersData] = useState(
		replyData.flat()
	);

	// const postReply = {
	// 	newName: name,
	// 	newDescription: description,
	// };
	// fetch("/", {
	// 	method: "POST",
	// 	headers: {
	// 		Accept: "application/json",
	// 		"Content-Type": "application/json",
	// 	},

	// 	body: JSON.stringify(postReply),
	// })
	// 	.then((res) => {
	// 		if (res.ok) {
	// 			return res.json();
	// 		}
	// 	})
	// 	.then((data) => setUpdatedAnswersData(data));
	//window.location.reload(true); // Refreshes the page.

	const handleReply = (e) => {
		e.preventDefault();
		setUpdatedAnswersData((updatedAnswersData) => [
			...updatedAnswersData,
			{ description: description, owner: name },
		]);
		e.target.children[0].value = "";
		e.target.children[1].value = "";
	};

	return (
		<div>
			<>
				<AnswersByIdThreads answersData={updatedAnswersData} />
			</>
			<form action="" className="replyFormStyle card" onSubmit={handleReply}>
				<input
					id="name"
					type="text"
					name="name"
					className="input1"
					placeholder="write your name"
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<textarea
					id="reply"
					name="reply"
					placeholder="Write your reply here..."
					rows="5"
					cols="33"
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<button className="input2 btn-primary" type="submit" value="Submit"></button>
			</form>
		</div>
	);
};

export default ReplyForm;