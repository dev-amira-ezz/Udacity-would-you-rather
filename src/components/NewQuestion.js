import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class NewQuestion extends Component {
    render() {
        const { questions, users, authedUser } = this.props
        console.log('authedUser from add question', authedUser)
        return (
            <div className="container">
                <div className="form">
                    <img
                        src={users[authedUser].avatarURL}
                        alt={`Avatar of ${authedUser.name}`}
                    />
                    <div className='question-info'>
                        <div>
                            <span>{authedUser.name} asks:</span>
                            <h3>Would you rather ...</h3>
                            <form>
                                <input type="text" name="optionOne" placeholder="Enter option one here ..." />
                                <p>Or ... </p>
                                <input type="text" name="optionTwo" placeholder="Enter option two here ..." />                                <br />
                                <button className="button">Add Question</button>
                            </form>
                        </div>
                        {/* Described in the Tweet Component video how to create buttons and add number of votes logic */}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(NewQuestion)