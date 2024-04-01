import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import axios from "axios";
import { Box, Heading, useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router";
import { Button, Input, Stack } from '@chakra-ui/react';
import { FaUser, FaLock } from 'react-icons/fa';
import { UserUrl } from "../ApiUrls";


function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[userData, setUserData] = useState([]);
    const toast = useToast()
    const navigate = useNavigate()

    const {userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin, isLoginLocal, setIsLoginLocal} = useContext(AuthContext);
    // console.log(isAuth);
    
    useEffect(()=>{
        axios.get(UserUrl)
        .then((response)=>
        // console.log(response.data))
        setUserData(response.data))

        
    },[])

    

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(email, password);
        setEmail("");
        setPassword("");

        if (!validateEmail(email)) {
            toast({
                title: 'Email incorrect',
                description: "Enter email in correct format ",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
            return;
        }
        if (!validatePassword(password)) {
            // console.log(password);
            toast({
                title: 'Password incorrect',
                description: "Password must be at least 8 characters long",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
            return; 
          }

          if(email == "admin@gmail.com"){
            userData.map((user)=>{
            setUserLoggedIn((prev)=>{
              return {...prev, id:user.id, username: user.username, isAuth: true, email:email}
                   })
            localStorage.setItem('isLoginLocal', user.id);
            
            navigate("/")
            setIsAdmin(true);
          })
       }
      
 // return
          else{
            let flag: boolean = false;
            userData.map((user)=>{
                if(user.email == email){
                    setUserLoggedIn((prev)=>{
                        return {...prev, id:user.id, username: user.username, isAuth: true, email:email}
                    })
                    localStorage.setItem('isLoginLocal', user.id);
                    flag = true;
                    navigate('/')
                    setIsLoginLocal(true);
                }
            })
            if(!flag){
                toast({
                    title: 'Email and Password incorrect',
                    description: "Enter correct email and password",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
            }
          }

        
    }
    useEffect(()=>{
        console.log(userLoggedIn);
        console.log(isAdmin);
        
        
    },[userLoggedIn, isAdmin])


    return(
        // <>
        // <h2>Welcome to login page</h2>
        // <form onSubmit={handleLogin}>
        //     <label htmlFor="email">Email:</label>
        //     <input
        //      type="text" 
        //      id="email"
        //      value={email} 
        //      onChange={(e)=>setEmail(e.target.value)}
        //      />
        //      <br />
        //     <label htmlFor="password">Password:</label>
        //     <input
        //     type="password" 
        //     id="password"
        //     value={password}
        //     onChange={(e)=> setPassword(e.target.value)}
        //     />
        //     <br />
        //     <button type="submit">Login</button>
        // </form>

        // <button onClick={()=> navigate("/signup")}>Create new Account</button>
        // </>
        <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Heading mb={4} textAlign="center" fontSize="xl">
        Welcome to login page
      </Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <Box>
            <Input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
          </Box>
          <Box>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </Box>
          <Button type="submit" colorScheme="blue" size="md" w="100%">
            Login
          </Button>
        </Stack>
      </form>
      <Box mt={4} textAlign="center">
        <Button variant="link" color="blue.500" onClick={()=> navigate("/signup")}>
          Create new Account
        </Button>
      </Box>
    </Box>
    )
}

export {Login}