import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import {handleAnswer} from '../actions/questions'

class AnswerQuestion extends Component {
    state={
        answer: ''
    }
    handleChange = (e) => {
        this.setState(() => ({
            answer: e.target.value,
        }))
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, qid, authedUser } = this.props
        const { answer } = this.state
        console.log('answer', answer)
        dispatch(handleAnswer(
            authedUser,
             qid,
              answer,
            ))
    }
    render() {
        const { question, authedUser } = this.props
         const { answer } = this.state

        if (question === null) {
            return <h1 className="not-found">This question does not exist</h1>
        }

        const { name, avatar, optionOne, optionTwo, timestamp } = question

        return (
            <div className="container">
                <div className="form">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                    />
                                    <p>{formatDate(timestamp)}</p>
                    <div className='question-info'>
                        <div>
                            <span>{name} asks:</span>
                            <h3>Would you rather ...</h3>
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                type="radio" 
                                name="answer" 
                                value="optionOne"
                                onChange={this.handleChange} />{` ${optionOne.text}`}
                                <p>Or ... </p>
                                <input 
                                type="radio" 
                                name="answer" 
                                value="optionTwo"
                                onChange={this.handlechange} />{` ${optionTwo.text}`}
                                <br />
                                <button className="button">Answer Question</button>
                            </form>
                        </div>
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
        qid,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(AnswerQuestion)