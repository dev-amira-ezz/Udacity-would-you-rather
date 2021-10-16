import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Would You Rather
          </h1>
          {this.props.loading === true
            ? null
            : <Dashboard />
          }
        </header>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
