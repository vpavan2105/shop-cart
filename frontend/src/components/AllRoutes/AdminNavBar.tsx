import { NavLink } from "react-router-dom"

const AdminNavBar = () => {

  return (
    <>
    <NavLink to="/">Dashboard</NavLink>
    <NavLink to="/ordersadmin">Orders</NavLink>
    <NavLink to="/productsadmin">Products</NavLink>
    <NavLink to="/usersadmin">Users</NavLink>
    </>
  )
}

export default AdminNavBar