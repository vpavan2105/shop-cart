import { ReactElement } from "react";
import {FormControl,FormLabel,Input,Button } from '@chakra-ui/react'



export function OrderList():ReactElement{

    const handleOrder=()=>{
        async function postRequest() {
            let res=await fetch('http://localhost:3001/orders', {method:'POST', body : JSON.stringify({
                
            })})
        }
    }

    return <><FormControl>
    <FormLabel>Name</FormLabel>
    <Input placeholder='Name' />
    <FormLabel>Address</FormLabel>
    <Input placeholder='Address' />
    <FormLabel>Pincode</FormLabel>
    <Input placeholder='Pincode' />
    <FormLabel>City</FormLabel>
    <Input placeholder='City'/>
    <FormLabel>State</FormLabel>
    <Input placeholder='State'/>
    <FormLabel>Country</FormLabel>
    <Input placeholder='Country'/>
    <Button bg="yellow" color='black' variant='outline' onClick={handleOrder}>Place Order</Button>
  </FormControl></>
}


//  "orderId": "order123",
//     "userId": "user123",
//     "productId": "product456",
//     "address": [
//       "123 Main Street",
//       "City",
//       "State",
//       "Zip Code",
//       "Country"
//     ],
//     "date": "2024-03-26T12:00:00Z",
//     "status": "pending",
//     "id": "bbc7"
