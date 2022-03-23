import React from "react";

const QuestionById = (props) => {
    return (
			<form className="questionByIdStyle">
				<h3>
					<span className="questionByIdOwner">{props.questionData.owner}</span>
					{props.questionData.title}
				</h3>
				<p>{props.questionData.description}</p>
			</form>
		);
};

export default QuestionById;