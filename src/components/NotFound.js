import React, { Component } from 'react'
import { connect } from 'react-redux'

function NotFound () {
    return (
      <div>
        <h1 className="not-found">404</h1>
        <h1 className="not-found">This question does not exist</h1>
        </div>
    )
}

function mapStateToProps (authedUser) {
  return authedUser
}
export default connect(mapStateToProps)(NotFound)