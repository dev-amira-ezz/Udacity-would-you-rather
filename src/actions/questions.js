import {saveQuestionAnswer} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion (authedUser, qid, answer) {
  return {
      type: ANSWER_QUESTION,
      qid,
      authedUser,
      answer
  }
}

export function handleAnswer (info) {
  return (dispatch)=>{
    dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)
    .catch((e)=>{
      console.warn('There is an error in handleAnswer: ', e)
      dispatch(answerQuestion(info))
      alert("There was an error answering the question, please try again.")
    })
  }
}