import axios from 'axios';
import  { useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, Input, Box, Heading, Icon } from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { UserUrl } from '../ApiUrls';

const SignUp = () => {
  const[userDetails, setUserDetails ] = useState({
    username: "",
    email:"",
    password: "",
    phonenumber:""
  })

  const navigate = useNavigate();

  function handleChange(e:any){
    const {name, value} = e.target;
    console.log(name, value);
    
    setUserDetails({...userDetails, [name]:value})
  }

  function handleSubmit(e:any){
    e.preventDefault();
    console.log(userDetails);
    axios.post(UserUrl, userDetails) 
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
    
    <Box maxW="md" mx="auto" mt={8} p={4} bgColor={'aliceblue'} borderWidth="1px"   textAlign="center" borderRadius="md" boxShadow="md">
      <Heading mb={4} fontSize="2xl">
        SignUp
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <label htmlFor="name" >
          <Icon as={FaUser} color="teal.400"  /> Enter your Name:
          </label>
          <br />
          <Input
            type="text"
            mb={3} 
            id="name"
            name="username"
            _hover={{ borderColor: "teal.400" }}
            value={userDetails.username}
            onChange={handleChange}
            bg="rgba(255, 255, 255, 0.6)"
          />
        </Box>
        <Box>
          <label htmlFor="email">
          <Icon as={FaEnvelope} color="teal.400" /> Enter your Email:
          </label>
          <br />
          <Input
            type="email"
            mb={3} 
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            bg="rgba(255, 255, 255, 0.6)"
            _hover={{ borderColor: "teal.400" }}
          />
        </Box>
        <Box>
          <label htmlFor="phone">
          <Icon as={FaPhone} color="teal.400" /> Enter your PhoneNumber:
          </label>
          <br />
          <Input
            type="number"
            id="phone"
            mb={3} 
            name="phonenumber"
            value={userDetails.phonenumber}
            onChange={handleChange}
            _hover={{ borderColor: "teal.400" }}
            bg="rgba(255, 255, 255, 0.6)"
          />
        </Box>
        <Box>
          <label htmlFor="password">
          <Icon as={FaLock} color="teal.400" /> Enter your Password:
          </label>
          <br />
          <Input
            type="password"
            id="password"
            mb={3} 
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            _hover={{ borderColor: "teal.400" }}
            bg="rgba(255, 255, 255, 0.6)"
          />
        </Box>
       
        <Button type="submit" colorScheme="blue" size="md" w="100%">
          Create Account
        </Button>
        <Button variant="link" color="blue.500" onClick={()=> navigate("/login")}>
          Login
        </Button>
      </form>
    </Box>
  )
  
}

export default SignUp