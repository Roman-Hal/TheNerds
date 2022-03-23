import React from "react";
import ReplyForm from "../../components/ReplyForm/ReplyForm";
import QuestionById from "../../components/QuestionById/QuestionById";
const SelectedQtnThread = ({ questionsData, id }) => {
	const answers = questionsData.map((el) => el.answers);
    return (
			<ul className="selectedQtnContain">
				<li>
					<QuestionById
						questionData={questionsData.find((q) => q.id == id)}
					/>
				</li>
				<li>
					<ReplyForm replyData={answers} />
				</li>
			</ul>
		);

};

export default SelectedQtnThread;