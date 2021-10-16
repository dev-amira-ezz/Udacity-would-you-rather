import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    value: 'logged-out',
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.value));
    if (this.state.value==='logged-out') {
      alert('Please select a username from the list')
    } 
  };
  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Welcome to </h2>
        <h2>'Would You Rather'</h2>
        <h2> game</h2>
        <br />
        <h3>Please login to continue</h3>
        <div>
          <select className="dropdown" onChange={this.handleChange}>
            <option value="logged-out">Select your username</option>
            {this.props.users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>

        <p><input type="submit" value="Login" className="button" />
        </p>
      </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default connect(mapStateToProps)(Login)
