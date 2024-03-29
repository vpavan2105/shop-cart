import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import Products from '../../pages/Products'
import Cart from '../../pages/Cart'
import Orders from '../../pages/Orders'
import Contacts from '../../pages/Contacts'
import { Login } from '../../pages/Login'
import PrivateRoute from '../PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={
        <PrivateRoute>
            <Cart/>
        </PrivateRoute>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes