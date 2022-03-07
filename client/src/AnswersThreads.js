import React from 'react';

const AnswersThreads = (props) => {
    return(
        <ul>
            {props.answersData.map(data => (
                <li>
                   {data.name} 
                   {data.reply}
                </li>
            ))}
        </ul>
    );
}

export default AnswersThreads;