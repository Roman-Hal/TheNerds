import React from 'react';

const ReplyForm = () => {
    return(
        <div>
            <form>
                <label htmlFor='addName'>
                    name <input id="name"type="text" name="name" placeholder="write your name" required/>
                </label>
                <textarea id="reply" name="reply">Your reply text</textarea>
                <input type="submit" value="Reply"/>
            </form>
        </div>
    );
}

export default ReplyForm;