import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import axios from "axios";
import { Box, Heading, useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router";
import { Button, Input, Stack } from '@chakra-ui/react';

import { UserUrl } from "../ApiUrls";



function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[userData, setUserData] = useState([]);
    const toast = useToast()
    const navigate = useNavigate()

    const {userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin}:any = useContext(AuthContext);
    // console.log(isAuth);
    
    useEffect(()=>{
        axios.get(UserUrl)
        .then((response)=>
        // console.log(response.data))
        setUserData(response.data))

        
    },[])

    

    const validateEmail = (email:string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    };

    const validatePassword = (password:string) => {
        return password.length >= 8;
    };

    const handleLogin=(e:any)=>{
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
            userData.map((user:any)=>{
            setUserLoggedIn((prev:any)=>{
              return {...prev, id:user.id, username: user.username, isAuth: true, email:email}
                   })
            localStorage.setItem('isLoginLocal', JSON.stringify({id: user.id, isAdmin: true, isUser: false}));
            setIsAdmin((prev:any)=>!prev);
            navigate("/")
           
          })
       }
      

          else{
            let flag: boolean = false;
            userData.map((user:any)=>{
                if(user.email == email){
                    setUserLoggedIn((prev:any)=>{
                        return {...prev, id:user.id, username: user.username, isAuth: true, email:email}
                    })
                    localStorage.setItem('isLoginLocal', JSON.stringify({id: user.id, isAdmin: false, isUser: true}));
                    flag = true;
                    console.log(flag);
                    
                    setIsAdmin((prev:any)=>!prev);
                    navigate('/')
                   
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
   
        <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bgColor={'aliceblue'}>
      <Heading mb={4} textAlign="center" fontSize="xl">
        Welcome to login page
      </Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <Box>

            <Input
              type="text"
              mt={3}
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor="white"
            _hover={{ borderColor: "teal.400" }}
          
            borderRadius="md"
             
            />
          </Box>
          <Box>
            <Input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderColor="white"
            _hover={{ borderColor: "teal.400" }}
          
            borderRadius="md"
              
            />
          </Box>
          <Button type="submit" colorScheme="blue" size="md" w="100%"   transition="all 0.2s"
          _hover={{ bg: "white", color: "#ff7e5f" }}
          _focus={{ bg: "white", color: "#ff7e5f" }}>
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