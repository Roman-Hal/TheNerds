
import React, { useState } from "react";
import "./AskQuestionForm.css";
const AskQuestionForm = ({ show }) => {

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	//const [created_at, setCreated_at] = useState("");
	const [hide, setHide] = useState(false);
	const [tags, setTags] = useState(["Node", "MongoDB"]);
	console.log(tags);
	const onSubmitQuestion = async(e) => {
		e.preventDefault();
		try {
			const body = { title, content };
			const response = await fetch("http://localhost:3100/api/question", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					// "Content-Type": "application/x-www-form-urlencoded",
				},
				body: JSON.stringify(body),
			});
			console.log(response);
		} catch(err) {
			console.error(err.message);
		}
	};


	// async function onSubmitForm(
	// 	url = "http://localhost:3100/api/askQuestion",
	// 	data = { title, content }
	// ) {
	// 	const response = await fetch(url, {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(data), // body data type must match "Content-Type" header
	// 	});
	// 	return response.json(); // parses JSON response into native JavaScript objects
	// }

	const addTags = (e) => {
		setTags([...tags, e.target.value]);
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
				<button type="button" className="AskQtnCloseBtn" onClick={handleHide}>
					<span aria-hidden="true">×</span>
				</button>
				{/* <div className="askQtn-banner">
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
				</div> */}
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
				<div className="tag-input">
					<ul>
						{tags.map((tag, index) => (
							<li key={index}>
								{tag}
								<span>x</span>
							</li>
						))}
					</ul>
					<input
						type="text"
						placeholder="Press enter to add tag"
						onKeyUp={addTags}
					/>
				</div>
				<div className="categories">
					{/* <button className="btn btn-warning m-3" onClick={}>
						JavaScript
					</button> */}
				</div>
				<button className="btn btn-danger m-3">Ask question</button>
			</form>
		</div>
	);
};


export default AskQuestionForm;
