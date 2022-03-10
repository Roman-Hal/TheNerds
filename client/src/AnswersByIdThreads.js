import React, { useState } from "react";
import ReplyForm from "./ReplyForm";

const AnswersByIdThreads = (props) => {
	const [updatedAnswersData, setUpdatedAnswersData] = useState(props.answersData);


   return (
			<ul className="answersFormat">
				{updatedAnswersData.map((a) => (
					<>
						<li className="subAnswersFormat">
							{a.description} <br />
							{a.owner}
						</li>
					</>
				))}
				<li>
					<ReplyForm replyData={setUpdatedAnswersData} />
				</li>
			</ul>
		);
};

export default AnswersByIdThreads;