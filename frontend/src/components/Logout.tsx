import { useConst } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router';

const Logout = () => {
    const {userLoggedIn, setUserLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        setUserLoggedIn({
            id: "",
            username: "",
            isAuth: false,
            email: "",
        })
    },[])

    navigate("/")
  return (
    <></>
  )
}

export default Logout