import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import handleInitialData from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import ViewQuestion from './ViewQuestion'
import NewQuestion from './NewQuestion'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard';
import NotFound from './NotFound'


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
              ? <Route path='/' exact component={Dashboard} /> && <Login />
              : <div>
                <h1 className="header">Would You Rather</h1>
                <NavBar />
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:question_id' component={ViewQuestion} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/notfound' component={NotFound} />
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
