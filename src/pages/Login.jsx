import React, { useState } from 'react'
import Loginnavbar from '../component/Loginnavbar'
import './css/login.css'


const Login = () => {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");

  const store = (n) => {
    
    let {name,value}=n;
    
    

    if(name=="userName"){
    setName(value)
    }
    else if(name=="pass"){
      setPassword(value)
    }
    

  }

const check = () => {
  if(name=="arabinda725@gmail.com" && password=="arabinda"){
    window.location.href="./products";
  }

}

  return (
    <>
      <Loginnavbar/>
      <div className="box">
        <span className="border2"></span>
        <span className="border"></span>
        <form action="">
            <h2>Sign in</h2>
            <div className="inputbox">
                <input type="text" name="userName" onChange={(e)=>{store(e.target)}} required />
                <span>username</span>
                <i></i>
            </div>
            <div className="inputbox">
                <input type="password" name="pass" onChange={(e)=>{
                  store(e.target)
                }}  required/>
                <span>password</span>
                <i></i>
            </div>
            <div className="links">
                <a href="">Forgot password</a>
                <a href="">Signup</a>
            </div>
            {/* <!-- <input type="submit" value="login" onclick="check()"> --> */}
            
        </form>
        <button onClick={check}>LOG IN</button>
    </div>
    </>
  )
}

export default Login