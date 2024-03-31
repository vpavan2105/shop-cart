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
import { useContext, useState } from 'react'
import SingleProductPage from '../Products/SingleProductCard'
import Logout from '../Logout'
import { AuthContext } from '../../contexts/AuthContextProvider'
import SignUp from '../../pages/SignUp'
import { SingleOrderPage } from '../Admin/SingleOrderPage'
import { SignleUserCard } from '../Admin/SignleUserCard'


const AllRoutes = () => {
  const {isAdmin} = useContext(AuthContext)
  return (
    <>
    {isAdmin?
    (<Routes>
      <Route path='/' element={<DashBoard/>} />
        <Route path='/ordersadmin' element={<OrdersAdmin/>} />
        <Route path='/productsadmin' element={<ProductsAdmin/>} />
        <Route path='/usersadmin' element={<UsersAdmin/>} />
    </Routes>) 
    :
    (<Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<SingleProductPage/>} />
      <Route path='/cart' element={
      <PrivateRoute>
          <Cart/>
      </PrivateRoute>} />
      <Route path='/orders' element={
      <PrivateRoute>
          <Orders/>
      </PrivateRoute>} />
      <Route path='/contact' element={<Contacts/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/signup' element={<SignUp />}/>
    </Routes>) }
    </>
  )
}

export default AllRoutes
