
import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContextProvider';
interface Links{
    to: string;
    displayText: string;
}
const NavBar = () => {
    const [isActive,setIsActive] = useState<boolean>(false);
    const {userLoggedIn}  = useContext(AuthContext);
    // console.log(userLoggedIn);
    
    const listOfLinks: Links[] = [
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
        userLoggedIn.isAuth ?{
            to:"/logout",
            displayText:"Logout"
        } :{
            to:"/login",
            displayText:"Login"
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

export default NavBar