import React, {useState, useEffect} from 'react'

import axiosWithAuth from '../util/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res =>
            setFriends(res.data)
        )
        .catch(err => console.log("Err is", err));
    })

    return (
        <div>
            {friends.map((friend) => {
                return (
                    <div>
                        <h2>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default FriendsList;