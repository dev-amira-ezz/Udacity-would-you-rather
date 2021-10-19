import React, { Component } from 'react'
import {  Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

 class NavBar extends Component {
  state = { 
      activeItem: '',
      authedUser: 'logged-out'
 }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = (e, { name }) => {
      this.setState({ activeItem: name, authedUser: 'logged-out' })
      const { dispatch } = this.props;
      dispatch(setAuthedUser(this.state.authedUser));
  
    }


  render() {
    const { activeItem } = this.state

    return (
      <div className="back-ground">
      <Menu secondary>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          as={NavLink} exact to='/' 
        
        />
        <Menu.Item
          name='Add Question'
          active={activeItem === 'Add Question'}
          onClick={this.handleItemClick}
         as={NavLink} to='/add' 

        />
        <Menu.Item
          name='Leaderboard'
          active={activeItem === 'Leaderboard'}
          onClick={this.handleItemClick}
        as={NavLink} to='/leaderboard' 
        />
        <Menu.Item
        name='welcome'
        content={`Welcome ${this.props.authedUser.authedUser}`}
        position='right'
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
            as={NavLink} to='/'
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

function mapStateToProps(authedUser) {
    return {authedUser}
}

export default connect(mapStateToProps)(NavBar)