import React, { Pressable } from "react";
import Question from "../Question/Question.js";
import { questionsData } from "../../mock/data.js";
import "./ListedQtnThread.css";

const ListedQtnThread = ({ onPressQuestion }) => {

	//const[questionsData, setQuestionData] = useState();

	// useEffect(() => {
	// 	fetch()
	// 		.then((res) => {
	// 			if (res.ok) {
	// 				return res.json();
	// 			}
	// 		})
	// 		.then((data) => setQuestionData(data));
	// });

    return (
			<div className="listedQtnThreadFormat">
				{questionsData.map((question) => {
					return (
						<>
							<button
								className="tentative"
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
		);
};

export default ListedQtnThread;