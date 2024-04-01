import React, {  ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

interface Props {
    children: ReactElement; // Use ReactElement to specify a single React element as children
  }

 
const PrivateRoute: React.FC<Props> = ({children}) => {
    const {userLoggedIn} = useContext(AuthContext)

    console.log(userLoggedIn.isAuth);

    const isAuth = localStorage.getItem("isLoginLocal")
    const authobj = JSON.parse(isAuth)
    console.log(authobj);
    
    
    if(!authobj || !authobj.isUser){
        return(<Navigate to="/login" />)
    }

    return children
}

export default PrivateRoute