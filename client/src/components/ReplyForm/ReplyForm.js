import React, { useState } from "react";
import AnswersByIdThreads from "../AnswersById/AnswersByIdThread";
import "./ReplyForm.css";
import { EditorState } from "draft-js";
//import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from "dompurify";

const api = process.env.API_URL || "/api";
const ReplyForm = ({ questionId }) => {
	//const [name, setName] = useState("");
	// const [description, setDescription] = useState("");
	// const [updatedAnswersData, setUpdatedAnswersData] = useState(
	// 	replyData.flat()
	// );
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);
	// const [convertedContent, setConvertedContent] = useState(null);
	// const handleEditorChange = (state) => {
	// 	setEditorState(state);
	// 	convertContentToHTML();
	// };
	// const convertContentToHTML = () => {
	// 	let currentContentAsHTML = convertToHTML();
	// 	setConvertedContent(currentContentAsHTML);
	// };


	// body:{question_id:1, answer_content:'asdadsadas'}
	const onSubmitReply = async (e) => {
		e.preventDefault();
		try {
			const body = { question_id: questionId, answer_content: convertedContent };
				await fetch(`${api}/answer`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					//"Content-Type": "application/x-www-form-urlencoded",
				},
				body: JSON.stringify(body),
			});
		} catch (err) {
			console.error(err.message);
		}
	};
	// const createMarkup = (html) => {
	// 	return {
	// 		__html: DOMPurify.sanitize(html),
	// 	};
	// };


	// const handleReply = (e) => {
	// 	e.preventDefault();
	// 	setUpdatedAnswersData((updatedAnswersData) => [
	// 		...updatedAnswersData,
	// 		{
	// 			description: convertedContent,
	// 			owner: name,
	// 		},
	// 	]);
	// 	e.target.children[0].value = "";
	// 	setEditorState("");
	// };
	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};

	return (
		<div>
			<>
				<AnswersByIdThreads questionId={questionId} />
			</>
			<form
				action=""
				className="replyFormStyle form-group"
				onSubmit={onSubmitReply}
			>
				<input
					id="name"
					className="form-control input1"
					type="text"
					name="name"
					placeholder="Write your name here..."
					autoComplete="off"
					//onChange={(e) => setName(e.target.value)}
					required
				/>
				<Editor
					wrapperClassName="wrapper"
					editorClassName="editor"
					toolbarClassName="toolbar"
					editorState={editorState}
					onEditorStateChange={setEditorState}
					/* handleEditorChange*/
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
				<button className="btn reply-btn">Reply</button>
			</form>
		</div>
	);
};

export default ReplyForm;