import React, { Component } from 'react'

import axiosWithAuth from '../util/axiosWithAuth';

class FriendsList extends Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/data")
        .then(res => {
            this.setState({
                friends: res.data.id.filter(
                    friend =>
                        <div>
                            <p>friend.name</p>
                            <p>friend.age</p>
                            <p>friend.email</p>
                        </div>
                )
            });
        })
        .catch(err => {
            console.log("Err is", err);
        });
    };

    

    render() {
        return (
            <div>
                <h1>FriendList</h1>
            </div>
        )
    }
}


export default FriendsList;