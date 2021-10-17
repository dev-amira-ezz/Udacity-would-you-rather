import React, { Component } from 'react'
import { connect } from 'react-redux'

// count questions where author = authedUser
// count questions where votes = authedUser
// sum of these is the score
// arrange by highest score
// all data are in the users object

class Leaderboard extends Component {

    render() {
        const { users } = this.props
        const sortedUsers = users.sort((a, b) => b.totalScore - a.totalScore)

        return (

            <ul>

                {sortedUsers.map((user, index) => (
                    <li className="form" key={user.id}> 
                        <h4>Ranking: {index+1}</h4>
                        <h4>{user.name}</h4>
                        <img src={user.avatarURL} alt={user.id} /> 
                        <h4>Answered Questions: {Object.keys(user.answers).length}</h4>
                        <h4>Asked Questions: {user.questions.length}</h4>
                        <h4>Score: {(Object.keys(user.answers).length)+(user.questions.length)}</h4>

                    </li>
                ))}
            </ul>
        )
    }
}


function mapStateToProps({ users }) {
    const userArray = Object.values(users)
    userArray.map(user => {
        const answeredQuestions = Object.keys(user.answers).length
        const addedQuestions = user.questions.length
        const score = answeredQuestions + addedQuestions   
    })
    return {
        users: userArray,
    }
}

export default connect(mapStateToProps)(Leaderboard)