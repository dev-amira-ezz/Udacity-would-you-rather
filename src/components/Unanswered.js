import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class Unanswered extends Component {
 
      render() {
          const {questions, users, authedUser} = this.props

          const unansweredIds = Object.keys(this.props.questions).filter((questionID)=>
    (!users[authedUser]
        .answers.hasOwnProperty(questionID)))

     const unansweredQuestions = Object.values(questions)
    .filter(question => unansweredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
             
  return (
      
      <div>
            {Object.values(unansweredQuestions).map((question=>(
                <li className="form" key={question.id}>
                <p> <img src={users[question.author].avatarURL} alt={users[question.author].id} /> </p>
                <p>{formatDate(question.timestamp)}</p>
                <h3>{question.author} says:</h3>
                <h3>Would you rather ... </h3>
                <p>{question.optionOne.text}</p>
                <p>Or ... </p>
                <Link className="button" to ={`/questions/${question.id}`} >View Question</Link>
                </li>
            )))}
 </div>
    )
  }
}

function mapStateToProps({questions , users , authedUser}) {
  return {
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Unanswered)