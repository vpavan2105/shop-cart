import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import Products from '../../pages/Products'
import Cart from '../../pages/Cart'
import Orders from '../../pages/Orders'
import Contacts from '../../pages/Contacts'
import { Login } from '../../pages/Login'
import PrivateRoute from '../PrivateRoute'
import DashBoard from '../../pages/Admin/DashBoard'
import OrdersAdmin from '../../pages/Admin/OrdersAdmin'
import ProductsAdmin from '../../pages/Admin/ProductsAdmin'
import { UsersAdmin } from '../../pages/Admin/UsersAdmin'
import { useState } from 'react'


const AllRoutes = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
    {!isAuth? (<Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={
        <PrivateRoute>
            <Cart/>
        </PrivateRoute>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>) : (<Routes>
      <Route path='/' element={<DashBoard/>} />
        <Route path='/ordersadmin' element={<OrdersAdmin/>} />
        <Route path='/productsadmin' element={<ProductsAdmin/>} />
        <Route path='/usersadmin' element={<UsersAdmin/>} />
    </Routes>) }
    

    
    </>
  )
}

export default AllRoutes