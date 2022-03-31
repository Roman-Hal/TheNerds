import React, { useState, useEffect, Pressable } from "react";
import Question from "../Question/Question.js";
//import { questionsData } from "../../mock/data.js";
import "./ListedQtnThread.css";

const api = process.env.API_URL || "/api";
const ListedQtnThread = ({ onPressQuestion }) => {
	const[questionsData, setQuestionData] = useState(null);

	useEffect(() => {
		fetch(`${api}/questions`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => setQuestionData(data));
	}, []);

    return questionsData?(
			<div className="listedQtnThreadFormat">
				{questionsData.map((question) => {
					return (
						<>
							<button className="tentative"
								onClick={() => onPressQuestion(question.id)}
							>
								<span>
									<Question data={question} />
								</span>
							</button>
						</>
					);
				})}
			</div>
		): null;
};

export default ListedQtnThread;