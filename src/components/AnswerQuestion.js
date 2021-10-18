import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class AnswerQuestion extends Component {
    render() {
        const { question } = this.props

        if (question === null) {
            return <h1 className="not-found">This question does not exist</h1>
        }

        const { name, avatar, timestamp, optionOne, optionTwo } = question

        return (
            <div className="container">
                <div className="form">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                    />
                    <div className='question-info'>
                        <div>
                            <span>{name} asks:</span>
                            <h3>Would you rather ...</h3>
                            <form>
                                <input type="radio" name="optionOne" />{` ${optionOne.text}`}
                                <p>Or ... </p>
                                <input type="radio" name="optionTwo" />{` ${optionTwo.text}`}
                                <br />
                                <button className="button">Answer Question</button>
                            </form>
                        </div>
                        {/* Described in the Tweet Component video how to create buttons and add number of votes logic */}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const qid = window.location.pathname.split('/').pop()
    const question = questions[qid]
    return {
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(AnswerQuestion)