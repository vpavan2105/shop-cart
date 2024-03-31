
import { useContext, useState } from 'react'
// import './App.css'
import AllRoutes from './components/AllRoutes/AllRoutes'
import NavBar from './components/AllRoutes/NavBar'
import AdminNavBar from './components/AllRoutes/AdminNavBar'
import { AuthContext } from './contexts/AuthContextProvider'

function App() {
  // const{isAdmin} = useContext(AuthContext)
  let isAdmin = false;

  return (
    <>
    {isAdmin? <AdminNavBar/> : <NavBar/> }
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
