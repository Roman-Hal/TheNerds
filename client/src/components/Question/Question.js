import React, { useEffect, useState } from "react";
import "./Question.css";

const api = process.env.API_URL || "/api";
function Question({ data, onPressQuestion }) {
	console.log(data.id);

	const [answers, setAnswers] = useState({});
	useEffect(() => {
	fetch(`${api}/answers/${data.id}`)
			.then((res) => res.json())
			.then((data) => setAnswers(data))
			.catch((err) => console.error(err));
	}, [data.id]);
	// const handleDelete = (e) => {
	// 	console.log(e.target.value);
	// 	fetch(`http://localhost:3100/api/questions/${data.id}`)
	// 	.then((res) => res.json())
	// 	.catch((err) => console.error(err));
	// };

  return (
		<>
			{data.title !== "Question title" && (
				<div className="questionStyle card m-3">
					<h4 className="card-title">{data.title}</h4>
					{/* <div className="arrow.right"></div> */}
					<div className="subQtnStyle card-text">
						<h4>
							{answers.length === 0 || answers.length === 1
								? `${answers.length} Answer`
								: `${answers.length} Answers`}
						</h4>
						{/* <span>{data.created_at}</span> */}
						{/* <button
					className="btn btn-danger"
					onClick={() => onPressQuestion(data.id)}
				><span>Reply</span>
				</button> */}
						{/* <button id={data.id} onClick={handleDelete}>Delete</button> */}
					</div>
				</div>
			)}
		</>
	);
}


export default Question;