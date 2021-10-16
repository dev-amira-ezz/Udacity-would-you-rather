import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
    render() {
        const { question } = this.props

        if (question === null ) {
            return <p>This question does not exist</p>
        }

        const { name, avatar, timestamp, optionOne, optionTwo } = question


        console.log('props', this.props)
        return(
            <div className="question">
                <img 
                src={avatar} 
                alt={`Avatar of ${name}`}
                className='avatar' />
                <div className='question-info'>
                    <div>
                  <span>{name}</span>
                  <div>{formatDate(timestamp)}</div>
                  <p>Option One: {optionOne.text}</p>
                  <p>Option Two: {optionTwo.text}</p>
                  </div>
                  {/* Described in the Tweet Component video how to create buttons and add number of votes logic */}
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
    const question = questions[id]
    return {
        authedUser,
        question: question 
                   ? formatQuestion(question, users[question.author], authedUser)
                   : null
    }
}

export default connect(mapStateToProps)(Question)