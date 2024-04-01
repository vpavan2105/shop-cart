
import { useContext, useState } from 'react'
 import './App.css'
import AllRoutes from './components/AllRoutes/AllRoutes'
import NavBar from './components/AllRoutes/NavBar'
import AdminNavBar from './components/AllRoutes/AdminNavBar'
import { AuthContext } from './contexts/AuthContextProvider'

function App() {
  // const{isAdmin} = useContext(AuthContext)
  // let isAdmin = false;
  // localStorage.setItem('isLoginLocal', JSON.stringify({id: '', isAdmin: false, isUser: false}));
  const isUserType = localStorage.getItem("isLoginLocal")
  const isUserobj = JSON.parse(isUserType) || {}
  console.log(isUserobj);
const { isAdmin} = useContext(AuthContext)
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


// import { useContext, useState } from 'react'
// // import './App.css'
// import AllRoutes from './components/AllRoutes/AllRoutes'
// import NavBar from './components/AllRoutes/NavBar'
// import AdminNavBar from './components/AllRoutes/AdminNavBar'
// import { AuthContext } from './contexts/AuthContextProvider'
// import CartList from './components/CartList'

// function App() {
 
//   return (
//     <>
//     {/* {isAdmin? <AdminNavBar/> : <NavBar/> }
//     <AllRoutes/> */}
//     <CartList/>
//     </>
//   )
// }

// export default App
