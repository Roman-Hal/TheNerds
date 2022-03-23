import React from "react";
import Question from "../Question/Question.js";
import { questionsData } from "../../mock/data.js";


const ListedQtnThread = ({ onPressQuestion }) => {
	//const [id, setId] = useState(null);

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
							{/* <button
								className="tentative"
								onClick={() => onPressQuestion(question.id)}
							>
								<Question data={question} />
							</button> */}
							<Question data={question} />
						</>
					);
				})}
			</div>
		);
};

export default ListedQtnThread;