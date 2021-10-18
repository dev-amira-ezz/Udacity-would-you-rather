import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTION:
            const qid = action.qid
            const answer = action.answer
            const authedUser = action.authedUser
            
            return {
                
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }

        default:
            return state
    }
}