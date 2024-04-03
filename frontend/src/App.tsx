
import { useContext } from 'react'
 import './App.css'
import AllRoutes from './components/AllRoutes/AllRoutes'
import NavBar from './components/AllRoutes/NavBar'
import AdminNavBar from './components/AllRoutes/AdminNavBar'
import { AuthContext } from './contexts/AuthContextProvider'

function App() {

  const isUserType:any = localStorage.getItem("isLoginLocal") 
  const isUserobj = JSON.parse(isUserType) || {}

const { isAdmin}:any = useContext(AuthContext)

  console.log(isAdmin);
  
 
  if(!isUserobj ) return(
    <>
    <NavBar/>
    <AllRoutes/>
    </>
  )
  return (
    <>
    {isUserobj.isAdmin? <AdminNavBar/> : <NavBar/> }
    <AllRoutes/>
    </>
  )
}

export default App


