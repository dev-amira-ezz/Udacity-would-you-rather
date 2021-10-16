import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsTab from './QuestionsTab'

class Dashboard extends Component {
    render() {
        return (

            <div>
                <QuestionsTab />
            </div>
        )
    }
}



function mapStateToProps({ questions , authedUser}) {
    return {
      questions,
      authedUser
    }
  }
  
export default connect(mapStateToProps)(Dashboard)