import { ReactElement, createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

interface Props {
  children: ReactElement; // Use ReactElement to specify a single React element as children
}

export interface LogUserDetails {
  id: string;
  username: string;
  isAuth: boolean;
  email: string;
}

const AuthContextProvider: React.FC<Props>= ({children}) => {
    
    
    const[isLoginLocal, setIsLoginLocal] = useState({
      id: "",
      isUser: false,
      isAdmin: false
    })
    const[isAdmin, setIsAdmin] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState<LogUserDetails>({
      id:  "",
      username: "",
      isAuth: false,
      email: "",
  });

  console.log(userLoggedIn);
  

    useEffect(() => {
      const loggedinUserId = localStorage.getItem('isLoginLocal');
      // console.log(loggedinUserId);
      
      if (loggedinUserId) {
        
        setUserLoggedIn((prev)=>{
          return {...prev, id:loggedinUserId, isAuth:true}
        })
      }
    }, []);

    
  return (
    <AuthContext.Provider value={{userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin, isLoginLocal, setIsLoginLocal}}>
         {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
