import React, { useState } from "react";
import AnswersByIdThreads from "./AnswersByIdThreads";

const ReplyForm = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [updatedAnswersData, setUpdatedAnswersData] = useState(
			props.replyData
		);


    const handleReply = () => {
        setUpdatedAnswersData((updatedAnswersData.concatenate(...[`{name: ${name}, description: ${description}}`])));
        setName("");
        setDescription("");
        alert(`${name} \n ${description}`);
    };
    console.log(updatedAnswersData);
    return (
			<div>
                <>
					<AnswersByIdThreads
						answersData={updatedAnswersData}
					/>
				</>
				<form className="replyFormStyle" onSubmit={handleReply}>
					{/* <label htmlFor='addName'> */}
					<input
						id="name"
						type="text"
						name="name"
						placeholder="write your name"
						onChange={(e) => setName(e.target.value)}
						required
					/>
					{/* </label> */}
					<textarea
						id="reply"
						name="reply"
						placeholder="Write here..."
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
					<input type="submit" value="Reply" />
				</form>
			</div>
		);
};

export default ReplyForm;