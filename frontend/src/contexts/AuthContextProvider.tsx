import { ReactElement, createContext, useState } from "react";

// export const AuthContext = createContext();
// ip
export const AuthContext = createContext<{
  userLoggedIn: LogUserDetails;
  setUserLoggedIn: (user: LogUserDetails) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}>({
  userLoggedIn: {
    id: "",
    username: "",
    isAuth: false,
    email: "",
  },
  setUserLoggedIn: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

interface Props {
  children: ReactElement; // Use ReactElement to specify a single React element as children
}

export interface LogUserDetails {
  id: string;
  username: string;
  isAuth: boolean;
  email: string;
}

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState<LogUserDetails>({
      id: "",
      username: "",
      isAuth: false,
      email: "",
  });

  //ip
  // const [userLoggedIn, setUserLoggedIn] = useState<LogUserDetails>({
  //   id: "1",
  //   username: "exampleUser",
  //   isAuth: true,
  //   email: "user@example.com",
  // });

  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider
      value={{ userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
