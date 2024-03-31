
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
import CartList from './components/CartList'
// import { OrderList } from './components/OrderList'
// import { OrderDisplay } from './components/OrderDisplay'
// import ProductList from './components/Products/ProductList'
// import SingleProductPage from './components/Products/SingleProductCard'
function App() {
  return (
    <>
   <CartList/>
   {/* <OrderList></OrderList> */}
   {/* <OrderDisplay></OrderDisplay> */}
   {/* <ProductList /> */}
   {/* <SingleProductPage /> */}
  
    </>
  )
}

export default App

