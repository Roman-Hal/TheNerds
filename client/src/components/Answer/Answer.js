import React from "react";

function Answer({ data }) {
  return (
		<div className="subAnswersFormat">
			<p className="p1">
				<strong>{data.owner}</strong>
			</p>
			<p>{data.description}</p>
		</div>
	);
}

export default Answer;