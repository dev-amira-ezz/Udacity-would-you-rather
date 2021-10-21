import React, { Component } from 'react'
import { connect } from 'react-redux'

function NotFound () {
    return (
        <h1 className="not-found">This question does not exist</h1>
    )
}

function mapStateToProps (authedUser) {
  return authedUser
}
export default connect(mapStateToProps)(NotFound)