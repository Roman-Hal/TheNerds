import React, { useState } from "react";
import AnswersByIdThreads from "../AnswersById/AnswersByIdThreads";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ReplyForm = ({ replyData }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [updatedAnswersData, setUpdatedAnswersData] = useState(
		replyData.flat()
	);
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
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
			<form
				action=""
				className="replyFormStyle form-group"
				onSubmit={handleReply}
			>
				<input
					id="name"
					className="form-control input1"
					type="text"
					name="name"
					placeholder="Write your name here..."
					autoComplete="off"
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<Editor
					wrapperClassName="wrapper"
					editorClassName="editor"
					toolbarClassName="toolbar"
					editorState={editorState}
					onEditorStateChange={setEditorState}
					// id="reply"
					// className="form-control"
					// name="reply"
					// placeholder="Write your reply here..."
					//onChange={(e) => setDescription(e.target.value)}
					// editorState={editorState}
					toolbar={{
						inline: { inDropdown: true },
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						link: { inDropdown: true },
						history: { inDropdown: true },
					}}
				/>
				<button className="input2 btn-danger">Reply</button>
			</form>
		</div>
	);
};

export default ReplyForm;