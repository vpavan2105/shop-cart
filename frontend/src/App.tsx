
// // import { useState } from 'react'
// import './App.css'
// import { Home } from './pages/Home'
// // import AllRoutes from './components/AllRoutes/AllRoutes'
// // import NavBar from './components/AllRoutes/NavBar'
// // import AdminNavBar from './components/AllRoutes/AdminNavBar'

// function App() {


//   return (
//     <>
//     {/* {isAuth? <AdminNavBar/> : <NavBar/> }
//     <AllRoutes/> */}
   
//     <Home/>
//     </>
//   )
// }

// export default App





import './App.css'

import {useState} from "react";
import AllRoutes from './components/AllRoutes/AllRoutes'
import NavBar from './components/AllRoutes/NavBar'
import AdminNavBar from './components/AllRoutes/AdminNavBar'

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
    {isAuth? <AdminNavBar/> : <NavBar/> }
    <AllRoutes/>
    </>
  )
}

export default App

