import React from "react";
import Friends from "./Friends";


const Friend = (props) => {
console.log(props);

    return(
        <>
       {props.friends.map(item => {
           console.log(item);
           return (
               <div className="friend-content" key={item.id}>
           <p>{item.name}</p>
           <p>{item.age}</p>
           <p>{item.email}</p>
           </div>)
       })}
        </>
    )
}


export default Friend;