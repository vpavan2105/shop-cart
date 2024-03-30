
import { useState } from 'react'
import './App.css'
import AllRoutes from './components/AllRoutes/AllRoutes'
import NavBar from './components/AllRoutes/NavBar'
import AdminNavBar from './components/AllRoutes/AdminNavBar'

function App() {

  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
    {isAuth? <AdminNavBar/> : <NavBar/> }
    <AllRoutes/>
    </>
  )
}

export default App





