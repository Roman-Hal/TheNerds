import React from "react";
import "./Answer.css";

function Answer({ data }) {
  return (
		<div className="subAnswersFormat overflow-auto">
			<p className="p1">
				<strong>{data.owner}</strong>
			</p>
			<p>{data.description}</p>
		</div>
	);
}

export default Answer;