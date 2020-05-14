import React, {useState, useEffect} from 'react'

import axiosWithAuth from '../util/axiosWithAuth';

import './FriendsList.css'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get(`/friends`)
        .then(res =>
            setFriends(res.data)
        )
        .catch(err => console.log("Err is", err));
    })

    return (
        <div className='wrapper'>
            {friends.map((friend) => {
                return (
                    <div className='friend'>
                        <p>ID#: {friend.id}</p>
                        <h2>Name: {friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default FriendsList;