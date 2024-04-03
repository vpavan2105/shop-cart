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
import CartList from '../CartList'
import { OrderList } from '../OrderList'
import { OrderDisplay } from '../OrderDisplay'


const AllRoutes = () => {
  // const {isLoginLocal} = useContext(AuthContext)
  const isUserType = localStorage.getItem("isLoginLocal")
  // console.log(isUserType);
  const isUserobj = JSON.parse(isUserType)
  
  return (
    <>
    {isUserobj && isUserobj.isAdmin?
    (<Routes>
      <Route path='/' element={<DashBoard/>} />
        <Route path='/ordersadmin' element={<OrdersAdmin/>} />
        <Route path='/productsadmin' element={<ProductsAdmin/>} />
        <Route path='/usersadmin' element={<UsersAdmin/>} />
        <Route path='/ordersadmin/:id' element={<SingleOrderPage/>}/>
        <Route path='usersadmin/:id' element={<SignleUserCard/>}/>
        <Route path='/logout' element={<Logout />} />
    </Routes>) 
    :
    (<Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<SingleProductPage/>} />
      <Route path="/order-list" element={<OrderList/>} />
      <Route path='/cart' element={
      <PrivateRoute>
          <CartList/>
      </PrivateRoute>} />
      <Route path='/orders' element={
      <PrivateRoute>
          <OrderDisplay/>
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
