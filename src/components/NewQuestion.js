import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOne : '',
        optionTwo: '',
    }
    handleChange = (e)=>{
        this.setState(()=>({
            [e.target.name] : e.target.value
        }))
    }
 
    handleSubmit = (e)=>{
      e.preventDefault()

      const { optionOne, optionTwo } = this.state

    //   todo: add question to store
    //   todo: redirect to home page
    console.log('New Question: option one: ', optionOne, 'option two: ', optionTwo)

    this.setState = {
        optionOne: '',
        optionTwo: '',
    }
    }

    render() {
        const { users, authedUser } = this.props
        const { optionOne, optionTwo } = this.state
        return (
            <div className="container">
                <div className="form">
                    <img
                        src={users[authedUser].avatarURL}
                        alt={`Avatar of ${authedUser.name}`}
                    />
                    <div className='question-info'>
                        <div>
                            <h3>Add a new question: </h3>
                            <h3>Would you rather ...</h3>
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                type="text" 
                                name="optionOne" 
                                value={optionOne} 
                                onChange={this.handleChange}
                                className="dropdown"
                                placeholder="Enter option one here ..." 
                                />
                                <p>Or ... </p>
                                <input 
                                type="text" 
                                name="optionTwo" 
                                value={optionTwo} 
                                onChange={this.handleChange}
                                className="dropdown"
                                placeholder="Enter option two here ..." 
                                />                                
                                <br />
                                <button 
                                className="button"
                                type="submit"
                                disabled={optionOne === '' || optionTwo === ''}
                                >
                                    Add Question
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(NewQuestion)