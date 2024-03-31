import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SignUp = () => {
  const[userDetails, setUserDetails ] = useState({
    username: "",
    email:"",
    password: "",
    phonenumber:""
  })

  const navigate = useNavigate();

  function handleChange(e){
    const {name, value} = e.target;
    console.log(name, value);
    
    setUserDetails({...userDetails, [name]:value})
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(userDetails);
    axios.post("http://localhost:3000/users", userDetails) 
    .then((response)=> console.log(response.data))
    .catch((error)=> console.error("error occured", error))

    setUserDetails({
      username: "",
      email:"",
      password: "",
      phonenumber:""
    })

    navigate("/login")

  }
  return (
    <>
    <div>SignUp</div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your Name:</label> <br />
      <input
      type="text" 
      id='name' 
      name='username'
      value={userDetails.username}
      onChange={handleChange}
      /> <br />

      <label htmlFor="email">Enter your Email:</label> <br />
      <input 
      type="email" 
      id='email'
      name='email'
      value={userDetails.email}
      onChange={handleChange}
      /> <br />

      <label htmlFor="phone">Enter your PhoneNumber:</label> <br />
      <input 
      type="text" 
      id='phone'
      name='phonenumber'
      value={userDetails.phonenumber}
      onChange={handleChange}
      />  <br />  

      <label htmlFor="passwrod">Enter your Password:</label> <br />
      <input 
      type="password" 
      id='password'
      name='password'
      value={userDetails.password}
      onChange={handleChange}
      /> <br />

      <button type='submit'>Create Account</button>

    </form>
    </>
  )
  
}

export default SignUp