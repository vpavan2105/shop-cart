import { ReactElement, useRef } from "react";
import {FormControl,FormLabel,Input,Button } from '@chakra-ui/react'



export function OrderList():ReactElement{
    const name = useRef<HTMLInputElement>(null);
    const address = useRef<HTMLInputElement>(null);
    const pincode = useRef<HTMLInputElement>(null);
    const city = useRef<HTMLInputElement>(null);
    const state = useRef<HTMLInputElement>(null);
    const country = useRef<HTMLInputElement>(null);
    const handleOrder=()=>{
        // async function postRequest() {
        //     let res=await fetch('http://localhost:3001/orders', {method:'POST', body : JSON.stringify({

        //     })})
        // }
        console.log(name.current?.value);
        console.log(address.current?.value);
        console.log(pincode.current?.value);
        console.log(city.current?.value);
        console.log(state.current?.value);
        console.log(country.current?.value);
         async function postRequest() {
            let res=await fetch('http://localhost:3001/orders', {method:'POST', body : JSON.stringify({
                userid:'1',
                name:name.current?.value,
                address:[address.current?.value, pincode.current?.value, city.current?.value, state.current?.value, country.current?.value]
            }), headers:{'Content-type':'application'}})
        }
    }

    return <><FormControl>
    <FormLabel>Name</FormLabel>
    <Input placeholder='Name' ref={name} />
    <FormLabel>Address</FormLabel>
    <Input placeholder='Address' ref={address}/>
    <FormLabel>Pincode</FormLabel>
    <Input placeholder='Pincode' ref={pincode}/>
    <FormLabel>City</FormLabel>
    <Input placeholder='City' ref={city}/>
    <FormLabel>State</FormLabel>
    <Input placeholder='State' ref={state}/>
    <FormLabel>Country</FormLabel>
    <Input placeholder='Country' ref={country}/>
    <Button bg="yellow" color='black' variant='outline' onClick={handleOrder}>Place Order</Button>
  </FormControl></>
}

