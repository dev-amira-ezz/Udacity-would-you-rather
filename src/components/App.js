import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Redirect, useParams } from 'react-router-dom'

import handleInitialData from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import AnswerQuestion from './AnswerQuestion'
import NewQuestion from './NewQuestion'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          {this.props.loading === true
            ? <LoadingBar />
            : this.props.loggedOut === true
              ? <Route path='/' exact component={App} /> && <Login />
              : <div>
                <NavBar />
                <h3>Would You Rather</h3>
                <Redirect to='/dashboard' />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/questions/:question_id' component={AnswerQuestion} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
              </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    loggedOut: authedUser === 'logged-out'
  }
}

export default connect(mapStateToProps)(App);
