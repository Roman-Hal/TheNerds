export const endpoints = {
    GET_QUESTIONS: () => "/api/questions",
    GET_QUESTION: (questionId)=>`/api/questions/${questionId}`,
    GET_ANSWERS: (questionId)=>`/api/answers/${questionId}`,
    POST_ANSWER: ()=>"/api/answer", // body:{question_id:1, answer:{content:'asdadsadas'}}
    POST_QUESTION: ()=>"/api/question", // body:{title:'dad', content:'adsda', category:['sad','sad']}
};
