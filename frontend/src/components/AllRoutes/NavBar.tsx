import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    const listOfLinks = [
        {
            to:"/",
            displayText: "Home"
        },
        {
            to:"/products",
            displayText: "Products"
        },
        {
            to:"/cart",
            displayText: "Cart"
        },
        {
            to:"/orders",
            displayText: "Orders"
        },
        {
            to:"/contact",
            displayText: "Contact Us"
        },
        {
            to:"/login",
            displayText:"Login"
        }
    ]

    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            listStyle:"none"
        }}>
           {listOfLinks.map((link)=>{
            return(<Link key={link.to} to={link.to}>{link.displayText}</Link>)
           })}
        </div>
        
    )
}

export default NavBar