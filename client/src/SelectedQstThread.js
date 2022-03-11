import React from "react";
import ReplyForm from "./ReplyForm";
import QuestionById from "./QuestionById";
import { questionsData } from "./mock/data.js";

const SelectedQtnThread = (props) => {
    return (
			<ul className="selectedQtnContain">
				<li>
					<QuestionById
						questionData={questionsData.find((q) => q.id == props.id)}
					/>
				</li>
				<li>
					<ReplyForm replyData={questionsData.filter((q) => q.id == props.id)[0].answers} />
				</li>
			</ul>
		);

};

export default SelectedQtnThread;