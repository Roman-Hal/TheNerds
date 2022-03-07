import React from 'react';
import AnswersThreads from './AnswersThreads';
import ReplyForm from './ReplyForm';
import expleData from './expleData.json'

const SelectedQtnThread = () => {
    return(
        <ul>
            <li>
                <h1>{expleData.title}</h1>
                <p>{expleData.description}</p>
                <h4>{expleData.name}</h4>
                <span>{data.date}</span>
            </li>
            <AnswersThreads />
            <ReplyForm />
        </ul>
    );

}

export default SelectedQtnThread;