import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }
    handleChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

		this.setState(()=>(
            {
				optionOne: '',
				optionTwo: '',
				toHome: true
			}
        )
		);
    }

    render() {
        const { users, authedUser } = this.props
        const { optionOne, optionTwo, toHome } = this.state
        console.log('toHome', toHome)
        if (toHome === true) {
            return <Redirect to='/' />
        }
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