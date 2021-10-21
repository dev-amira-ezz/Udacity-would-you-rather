import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA.js'

export async function getInitialData() {
  const [users, questions] = await Promise.all([
    _getUsers(),
    _getQuestions(),
  ])
  return ({
    users,
    questions,
  })
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}

export function saveQuestion(info) {
  return _saveQuestion(info)
}