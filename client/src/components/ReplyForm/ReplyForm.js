import React, { useState } from "react";
import AnswersByIdThreads from "../AnswersById/AnswersByIdThreads";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
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
		console.log(editorState);
		setUpdatedAnswersData((updatedAnswersData) => [
			...updatedAnswersData,
			{
				description: convertToHTML(editorState.getCurrentContent()),
				owner: name,
			},
		]);
		e.target.children[0].value = "";
		setEditorState("");
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

					toolbar={{
						inline: { inDropdown: true },
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						link: { inDropdown: true },
						history: { inDropdown: true },
						image: {
							uploadCallback: uploadImageCallBack,
							alt:{ present: true, mandatory: true } ,
						},
					}}
				/>
				<button className="input2 btn-danger">Reply</button>
			</form>
		</div>
	);
};

export default ReplyForm;