import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }

    return(
        <>
            <h2>Enter Login Credentials</h2>
            <br/>
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            placeholder="Enter Username..." />
            <br/>
            <br/>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="text" 
            placeholder="Enter Password.."/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login;