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
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default NewFriend;