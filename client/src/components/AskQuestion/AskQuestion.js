import React from "react";

const AskQuestion = () => {
    return(
        <form>
            <label htmlFor="title">Which problem are you trying to solve?</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="lname">Last name:</label>
            <textarea type="text" id="lname" name="lname"></textarea>
            <label htmlFor="lname">Last name:</label>
            <textarea type="text" id="lname" name="lname"></textarea>
            <label htmlFor="lname">Last name:</label>
            <textarea type="text" id="lname" name="lname"></textarea>
            <button>Ask</button>
        </form>
    );

};

export default AskQuestion;