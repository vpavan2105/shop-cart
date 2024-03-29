import React, {  ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactElement; // Use ReactElement to specify a single React element as children
  }

const PrivateRoute: React.FC<Props> = ({children}) => {
    const isLogin = false;
    if(!isLogin){
        return(<Navigate to="/login" />)
    }

    return children
}

export default PrivateRoute