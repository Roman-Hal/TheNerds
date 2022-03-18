import React from "react";

function Answer({ data }) {
  return (
		<div className="subAnswersFormat">
			<p>{data.description}</p>
			<p>{data.owner}</p>
		</div>
	);
}

export default Answer;