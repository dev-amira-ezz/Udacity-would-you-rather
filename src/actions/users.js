import { saveQuestionAnswer } from "../utils/api";
import { answerQuestion } from './questions'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER'


export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}


export function userAddQuestion ({ qid, author }) {
  return {
    type: USER_ADD_QUESTION,
    qid,
    author
  };
}

function userAddAnswer({authedUser, qid, answer}) {
  return {
    type: USER_ADD_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleAnswer({authedUser, qid, answer}) {
  return async dispatch => {
    dispatch(userAddAnswer({authedUser, qid, answer}));
    dispatch(answerQuestion({authedUser, qid, answer}));

    try {
      return saveQuestionAnswer(authedUser, qid, answer);
    } catch (e) {
      console.warn('Error in handleAnswer:', e);
    }
  };
}
