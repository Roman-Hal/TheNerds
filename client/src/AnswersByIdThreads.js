import React from "react";

const AnswersByIdThreads = (props) => {
   return (
			<ul className="answersFormat">
				{props.answersData.map((a) => (
					<>
						<li className="subAnswersFormat">
							{a.description} <br />
							{a.owner}
						</li>
					</>
				))}
			</ul>
		);
};

export default AnswersByIdThreads;