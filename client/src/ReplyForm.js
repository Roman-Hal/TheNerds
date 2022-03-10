import React, { useState } from "react";

const ReplyForm = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleReply = () => {
        props.setUpdatedAnswersData((updatedAnswersData.concatenate([`{name: ${name}, description: ${description}}`])));
        alert(`${name} \n ${description}`);
        setName("");
        setDescription("");
    };
    return (
			<div>
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