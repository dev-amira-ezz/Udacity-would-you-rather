import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
return {
  type: ADD_QUESTION,
  question,
}
}

export function handleAddQuestion (optionOne, optionTwo) {
  return (async (dispatch, getState)=>{
    const { authedUser } = getState()
    
    dispatch(showLoading())
    const question = await saveQuestion({
      optionOneText: optionOne,
			optionTwoText: optionTwo,
      author: authedUser,
    })
    dispatch(addQuestion(question))
    return dispatch(hideLoading())
  })
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion (authedUser, qid, answer) {
  return {
      type: ANSWER_QUESTION,
      authedUser,
      qid,
      answer
  }
}

export function handleAnswer (authedUser, qid, answer) {
  return (dispatch)=>{
    dispatch(answerQuestion(authedUser, qid, answer))

    return saveQuestionAnswer(authedUser, qid, answer)
    .catch((e)=>{
      console.warn('There is an error in handleAnswer: ', e)
      dispatch(answerQuestion(authedUser, qid, answer))
      alert("There was an error answering the question, please try again.")
    })
  }
}