import React, { useState } from "react";
import AnswersByIdThreads from "../AnswersById/AnswersByIdThread";
import "./ReplyForm.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from "dompurify";

const ReplyForm = ({ replyData }) => {
	const [name, setName] = useState("");
	// const [description, setDescription] = useState("");
	const [updatedAnswersData, setUpdatedAnswersData] = useState(
		replyData.flat()
	);
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);
	const [convertedContent, setConvertedContent] = useState(null);
	const handleEditorChange = (state) => {
		setEditorState(state);
		convertContentToHTML();
	};
	const convertContentToHTML = () => {
		let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
		setConvertedContent(currentContentAsHTML);
	};

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
			{
				description: convertedContent,
				owner: name,
			},
		]);
		e.target.children[0].value = "";
		setEditorState("");
	};
	// const createMarkup = (html) => {
	// 	return {
	// 		__html: DOMPurify.sanitize(html),
	// 	};
	// };

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
					onEditorStateChange={handleEditorChange} /*setEditorState*/
					toolbar={{
						inline: { inDropdown: true },
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						//link: { inDropdown: true },
						history: { inDropdown: true },
						link: {
							visible: true,
							inDropdown: true,
							addLink: { visible: true },
							removeLink: { visible: true },
						},
						image: {
							visible: true,
							fileUpload: true,
							url: true,
						},
					}}
				/>
				<button className="input2 btn-danger">Reply</button>
			</form>
		</div>
	);
};

export default ReplyForm;