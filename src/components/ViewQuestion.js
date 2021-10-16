import React, { Component } from 'react'
import Question from '../components/Question'
import { connect } from 'react-redux'

class ViewQuestion extends Component {
    render() {
        const {authedUser, answered} = this.props
        console.log('Is it answered? ', answered)
    
        return(
            (answered 
            ? <p>The Question is answered</p>
            : <p>The Question is not answered</p>)
        )
    }
}

function mapStateToProps({questions, authedUser}, { match }) {
    const qid = window.location.pathname.split('/').pop();
const answered = questions[qid].optionOne.votes.indexOf(authedUser) >=0 || questions[qid].optionTwo.votes.indexOf(authedUser) >=0
  return {
      qid,
      authedUser,
      answered,
  }
}

export default connect(mapStateToProps)(ViewQuestion)