import { useConst } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router';

const Logout = () => {
    const {userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("check logout");
    

    useEffect(()=>{
        setUserLoggedIn({
            id: "",
            username: "",
            isAuth: false,
            email: "",
        })
        setIsAdmin(false)
    },[])

    useEffect(()=>{
      navigate("/")
    },[userLoggedIn.isAuth, isAdmin])

    
  return (
    <></>
  )
}

export default Logout