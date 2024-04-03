import { NavLink } from "react-router-dom"

import { useState } from "react";

const AdminNavBar = () => {
  const [isActive,setIsActive] = useState<boolean>(false);

  const listOfLinks=[
    {
       to:"/",
       displayText:"Dashboard"
    },
    {
      to:"/ordersadmin",
      displayText:"Orders"
    },
    {
      to:"/productsadmin",
      displayText:"Products"
    },
    {
      to:"/usersadmin",
      displayText:"Users"
    },
    {
      to:"/logout",
      displayText:"Logout"
    }
  ]
  const defaultStyle : {color: string} = {color:"black"}
    const activeStyle : {color: string} = {color:"red"}

  return (
    <div className='navbar'>
       <div className={`hamburger-menu ${isActive? "active" : null}`} onClick={()=>{setIsActive(prev=>!prev) }} >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <div className={`navbar-inner ${isActive? "active" : null}`}>
            {listOfLinks.map((link)=>{
                return(<NavLink  onClick={()=>{setIsActive(prev=>!prev) }} style={({isActive})=> isActive?activeStyle:defaultStyle}
                    key={link.to} to={link.to}>{link.displayText}</NavLink>)
            })}
            
        </div>
    </div>
    
  )
}

export default AdminNavBar