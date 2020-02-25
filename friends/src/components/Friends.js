import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

const Friends = () => {

const [friends, setFriends] = useState([]);
const [newFriend, setNewFriend] = useState({
   
    name: "",
    age: "",
    email: ""
})

const getData = (e) => {
    e.preventDefault();
    axiosWithAuth().get('/api/friends')
    .then(res => {
        console.log(res)
        setFriends(res.data)
    })
}

const handleChanges = e => {
    e.preventDefault();
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
    console.log(newFriend);
}

const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/api/friends/', newFriend)
    .then(res => {
        console.log(res)
        setFriends(res.data)
    })
}

    return(
        <>
        <p>Welcome to your friends list!</p>
         <button onClick={getData}>Get Friends!</button>
         <form onSubmit={addFriend}>
             <input type="text" name="name" placeholder="Name" value={newFriend.name} onChange={handleChanges}/>
             <input type="text" name="age" placeholder="Age" value={newFriend.age} onChange={handleChanges}/>
             <input type="email" name="email" placeholder="Email" value={newFriend.email} onChange={handleChanges}/>
             <button>Add Friend!</button>



        </form>
        
        
        
       
     
        <Friend friends={friends}/>
       
        </>
    )
}

export default Friends;