export const endpoints = {
    GET_QUESTIONS: () => "/api/questions",//{id, title, content, created_at, username, count_answers}
    GET_QUESTION: (questionId)=>`/api/questions/${questionId}`,
    GET_ANSWERS: (questionId)=>`/api/answers/${questionId}`,
    POST_REPLY: ()=>"/api/reply", // body:{question_id:1, answer:{description:'asdadsadas'}}
    POST_QUESTION: ()=>"/api/question", // body:{title:'dad', description:'adsda', category:['sad','sad']}
};
