import React, { useState } from 'react'
import Signupnav from '../component/Signupnav'
import './css/signup.css'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")
  const [cfpass, setCfPass] = useState("")
  const getData = () => {
    if (!name || 
      !email || 
      !phone || 
      !pass || 
      !cfpass 
      ) {
      alert("Please fill all the fields")
    }
    else {
      if(pass.length >=8 &&
        pass.length <=16)

      {if (pass !== cfpass) {
        alert("Passwords do not match")
      }
      else {
        console.log(name, email, phone, pass, cfpass)
      }}
      else{
        alert("please fill the password")
      }
    }

  }


  return (
    <>
      <Signupnav />
      <div className='childDiv'>
        <h1 className='inphead'>IT IS A SIGN UP PAGE</h1>
        <input type="text" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
        <input type="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="tel" placeholder="Enter your phone number" onChange={(e) => { setPhone(e.target.value) }} />
        <input type="text" placeholder="Enter your password" onChange={(e) => { setPass(e.target.value) }} />
        <input type="password" placeholder="confirm password" onChange={(e) => { setCfPass(e.target.value) }} />
        <button onClick={getData}>Submit</button>
      </div>

      <h1>
        {/* {
      name+" "+email+" "+phone+" "+pass+" "+cfpass
    } */}
      </h1>

    </>
  )
}

export default Signup