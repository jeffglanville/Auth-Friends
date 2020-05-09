import React, { Component } from 'react'

class NewFriend extends Component {
    state = {
        friends: {
            name: "",
            age: "",
            email: ""
        }
    }

    handleChange = e => {
        this.setState({
            friend: [{
                ...this.state.friends,
                [e.target.name]: e.target.value
            }]
        })
    };


    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button>Please Log In</button>
                </form>
            </div>
        )
    }
}

export default NewFriend;