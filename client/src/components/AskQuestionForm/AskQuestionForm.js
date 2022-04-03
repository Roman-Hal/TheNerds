
import React, { useState } from "react";
import "./AskQuestionForm.css";

const api = process.env.API_URL || "/api";
const AskQuestionForm = ({ show }) => {

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [hide, setHide] = useState("");

	const onSubmitQuestion = async(e) => {
		e.preventDefault();
		try {
			const body = { title, content };
			const response = await fetch(`${api}/question`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			console.log(response);
		} catch(err) {
			console.error(err.message);
		}
	};



	const handleHide = (e) => {
		e.preventDefault();
		setHide(!hide);
		window.location.reload(true);
	};
	return (
		<div className={show ? "show" : ""}>
			<form
				className="askQuestionStyle form-group card"
				onSubmit={onSubmitQuestion}
			>
				<button
					type="button"
					className="AskQtnCloseBtn close"
					aria-label="Close"
					onClick={handleHide}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="askQtn-banner">
					<h1>Writing a good question</h1>
					<p>
						You’re ready to ask a programming-related question and this form
						will help guide you through the process.
					</p>
					<p>
						Looking to ask a non-programming question? See the topics here to
						find a relevant site.
					</p>
					<ul>
						<span>Steps</span>
						<li>Summarize your problem in a one-line title.</li>
						<li>Describe your problem in more detail.</li>
						<li>Describe what you tried and what you expected to happen.</li>
						<li>
							Add “tags” which help surface your question to members of the
							community.
						</li>
						<li>Review your question and post it to the site.</li>
					</ul>
				</div>
				<label htmlFor="title">Title</label>
				<input
					className="form-control"
					type="text"
					id="title"
					name="title"
					placeholder="Which problem are you trying to solve?"
					autoComplete="off"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="expectedOutcome">Body</label>
				<textarea
					className="form-control"
					type="text"
					rows={5}
					cols={5}
					placeholder="Elaborate on your issue"
					onChange={(e) => setContent(e.target.value)}
				/>
				<div className="categories">
					{/* <button className="btn btn-warning m-3" onClick={}>
						JavaScript
					</button> */}
				</div>
				<button type="submit" className="btn askQtn-btn">
					Ask question
				</button>
			</form>
		</div>
	);
};


export default AskQuestionForm;
