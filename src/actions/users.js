export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';


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