import React, { useState } from 'react'
import axiosWithAuth from '../util/axiosWithAuth';
import './NewFriend.css';

const NewFriend = () => {
    const [friend,setFriend] = useState({
        friends: {
            id: Date.now(),
            name: "",
            age: "",
            email: ""
        }
    })

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
        setFriend({ id: "", name: "", age: "", email: "" });
      };
        return (
            <div>
                <form className= 'friend_form' onSubmit={handleSubmit}>
                    <input
                        className='friend_input'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={friend.name}
                        onChange={handleChange}
                    />
                    <input
                        className='friend_input'
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={friend.age}
                        onChange={handleChange}
                    />
                    <input
                        className='friend_input'
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={friend.email}
                        onChange={handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }


export default NewFriend;