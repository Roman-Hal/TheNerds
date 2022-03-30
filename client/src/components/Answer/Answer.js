//import React, { useState } from "react";
import "./Answer.css";

function Answer({ data, key }) {
	console.log(data);
	// const [answersData, setAnswersData] = useState([data]);
  return (
		<div className="subAnswersFormat overflow-auto">
			{/* <p className="p1">
				<strong>{data.owner}</strong>
			</p> */}
			{data.map((answer) => {
				return (
					<div key={key}>
						<p>{answer.content}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Answer;