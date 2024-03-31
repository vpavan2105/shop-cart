import {Flex} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
interface Links{
    to: string;
    displayText: string;
}
const NavBar = () => {
   
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
        {
            to:"/login",
            displayText:"Login"
        }
    ]

    const defaultStyle : {color: string} = {color:"black"}
    const activeStyle : {color: string} = {color:"red"}

    return (

        <>
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        bg="blue.300"
        >
            {listOfLinks.map((link)=>{
                return(<NavLink style={({isActive})=> isActive?activeStyle:defaultStyle}
                    key={link.to} to={link.to}>{link.displayText}</NavLink>)
            })}
        </Flex>
        </>
        
    )
}

export default NavBar