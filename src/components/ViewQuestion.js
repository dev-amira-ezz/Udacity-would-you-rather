import React, { Component } from 'react'
import Question from '../components/Question'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import AnswerQuestion from './AnswerQuestion'
import { Redirect } from 'react-router'

class ViewQuestion extends Component {
    render() {
        const { authedUser, answered } = this.props

        return (
            notFound
                ? <Redirect to="/NotFound" />
                : answered
                    ? <QuestionDetails />
                    : <AnswerQuestion />)

    }
}

function mapStateToProps({ questions, authedUser }, { match }) {
    const qid = window.location.pathname.split('/').pop();
    if (!questions[qid]) return { notFound: true }
    const answered = questions[qid].optionOne.votes.indexOf(authedUser) >= 0 || questions[qid].optionTwo.votes.indexOf(authedUser) >= 0
    return {
        qid,
        authedUser,
        answered,
    }
}

export default connect(mapStateToProps)(ViewQuestion)