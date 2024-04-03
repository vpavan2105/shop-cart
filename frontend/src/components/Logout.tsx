
import  { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router';

const Logout = () => {
    const { setUserLoggedIn, isAdmin, setIsAdmin}:any = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("check logout",isAdmin);
    

    useEffect(()=>{
        setUserLoggedIn({
            id: "",
            username: "",
            isAuth: false,
            email: "",
        })
        setIsAdmin(false)
        localStorage.removeItem("isLoginLocal")
        // localStorage.setItem("isLoginLocal" , JSON.stringify({id:null, isAdmin: false, isUser: false}))
        navigate("/")
    },[])

  

    
  return (
    <></>
  )
}

export default Logout