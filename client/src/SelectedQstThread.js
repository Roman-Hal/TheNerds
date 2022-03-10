import React from "react";
import AnswersByIdThreads from "./AnswersByIdThreads";
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
					<AnswersByIdThreads
						answersData={
							questionsData.filter((q) => q.id == props.id)[0].answers
						}
					/>
				</li>
			</ul>
		);

};

export default SelectedQtnThread;