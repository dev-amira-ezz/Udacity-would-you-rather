import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetails extends Component {
    render() {
        const { questions, users, authedUser, qid } = this.props
        const answeredOne = questions[qid].optionOne.votes.includes(authedUser)
        const questionOneVotes = questions[qid].optionOne.votes.length
        const questionTwoVotes = questions[qid].optionTwo.votes.length
        const votes = (questionOneVotes)+(questionTwoVotes)
        return (
            <div className="container">
                <div className="form">
                    <p> <img src={users[questions[qid].author].avatarURL} alt={users[questions[qid].author].id} /> </p>
                    <p>Asked By: {questions[qid].author}</p>
                    <h3>Would you rather ... </h3>
                    {answeredOne
                        ? <div>
                            <div className="your-answer">
                                <p>Your Answer:</p>
                                <p>{questions[qid].optionOne.text}</p>
                                <h4>{questionOneVotes} out of {votes} votes</h4>
                            </div>
                            <p>Or ... </p>
                            <p>{questions[qid].optionTwo.text}</p>
                            <h4>{questionTwoVotes} out of {votes} votes</h4>
                        </div>
                        : <div>
                            <p>{questions[qid].optionOne.text}</p>
                            <h4>{questionOneVotes} out of {votes} votes</h4>
                            <p>Or ... </p>
                            <div className="your-answer">
                                <p>Your Answer:</p>
                                <p>{questions[qid].optionTwo.text}</p>
                                <h4>{questionTwoVotes} out of {votes} votes</h4>
                            </div>
                        </div>
                    }
                </div>
            </div >)
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    const qid = window.location.pathname.split('/').pop()
    return {
        questions,
        users,
        authedUser,
        qid,
    }
}

export default connect(mapStateToProps)(QuestionDetails)