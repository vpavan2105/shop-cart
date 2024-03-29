import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartData, ProdData } from '../../redux/utils/adminUtils';
import { useAppSelector } from '../../redux/utils/Product_Utils';

const SignleUserCard = () => {
    const {id} = useParams();
    const [cartUser,setCartUser] = useState<ProdData | {}>();
    const cartDetails = useAppSelector(state=>state.carts.cartData);
    console.log(cartDetails);
    useEffect(()=>{
        const foundCart = cartDetails.find((cart:CartData)=>cart.user_id == id)
        console.log(cartDetails);
        setCartUser(foundCart);
    },[id,cartDetails])

if(Object.keys(cartUser).length === 0) return <div>Loading...</div>

  return (
    <div>
     {cartUser.user_id}
     {cartUser.products.map((prod,index)=>{
     return (
        <div key={index}>
            <h3>{prod.product_id}</h3>
       </div>
     )
     })}
    </div>
  )
}

export  {SignleUserCard}
