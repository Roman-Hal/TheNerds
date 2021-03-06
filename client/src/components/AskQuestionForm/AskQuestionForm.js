
import React, { useState } from "react";
import "./AskQuestionForm.css";

const api = process.env.API_URL || "/api";
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
			const response = await fetch(`${api}/question`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: JSON.stringify(body),
			});
			console.log(response);
		} catch(err) {
			console.error(err.message);
		}
	};

	const populateHtml = (e) => {
		e.preventDefault();
		setHtml("html");
		setTags(tags.push(html));
	};

	const populateCss = (e) => {
		e.preventDefault();
		setHtml("css");
		setTags(tags.push(css));
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
