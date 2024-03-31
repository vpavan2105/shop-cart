import { ReactElement, createContext, useState } from "react"

export const AuthContext = createContext();

interface Props {
    children: ReactElement; // Use ReactElement to specify a single React element as children
  }

  export interface LogUserDetails{
    id: string;
    username: string;
    isAuth: boolean;
    email: string;
  }

const AuthContextProvider: React.FC<Props>= ({children}) => {
    
    const [userLoggedIn, setUserLoggedIn] = useState<LogUserDetails>({
        id: "",
        username: "",
        isAuth: false,
        email: "",
    });
    const[isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider value={{userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin }}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider