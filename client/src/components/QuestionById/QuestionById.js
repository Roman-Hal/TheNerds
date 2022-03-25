import React from "react";
import "./QuestionById.css";

const QuestionById = (props) => {
    return (
			<form className="questionByIdStyle">
				<h3 className="hide-btn">
					<span className="questionByIdOwner">{props.questionData.owner}</span>
					{props.questionData.title}
				</h3>
				<p>{props.questionData.description}</p>
			</form>
		);
};

export default QuestionById;