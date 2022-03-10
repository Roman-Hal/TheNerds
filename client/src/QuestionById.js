import React from "react";

const QuestionById = (props) => {
    return (
			<form>
				<h3>{props.questionData.title}</h3>
				<p>{props.questionData.description}</p>
				<span>{props.questionData.owner}</span>
			</form>
		);
};

export default QuestionById;