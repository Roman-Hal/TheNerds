import React from "react";
import "./Question.css";

function Question({ data, onPressQuestion }) {
  return (
			<div
				className="questionStyle card m-3"
			>
				<h4 className="card-title">
					<span>{data.owner}</span>
					{data.title}
				</h4>
				<p className="card-text">{data.description}</p>
				<p>{data.timestamp}</p>
				{/* <button
					className="btn btn-danger"
					onClick={() => onPressQuestion(data.id)}
				><span>Reply</span>
				</button> */}
			</div>
	);
}

export default Question;