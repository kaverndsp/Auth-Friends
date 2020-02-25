import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
const [info, setInfo] = useState({
    username: "",
    password: ""
})
const [isLoading, setIsLoading] = useState(false);

const handleChanges = (e) => {
    setInfo({...info, [e.target.name]: e.target.value})
    console.log(info);
}

const Login = (e) => {
    e.preventDefault();
   setIsLoading(true);
    axiosWithAuth()
      .post('/api/login', info)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload);
        // navigate the user to /protected (whatever landing page)
        props.history.push('/protected');
        
      })
      .catch(err => {
        console.log(err)
       

    });

}

return(
    <>
    <form onSubmit={Login}>
        <input type="text" name="username" onChange={handleChanges} value={info.username}/>
        <input type="password" name="password" onChange={handleChanges} value={info.password}/>
        
       <button>Submit</button>
    </form>
    </>
)
}

export default Login;