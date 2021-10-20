import { RECEIVE_USERS } from '../actions/users'
import { USER_ADD_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        
        case USER_ADD_QUESTION:
                const { qid, author } = action;

                return {
                  ...state,
                  [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(qid)
                  }
                };
          
        default:
            return state
    }
}