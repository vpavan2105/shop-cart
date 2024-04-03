import { useEffect } from "react"
import { OrdersList } from "../../components/Admin/OrdersList"
import { useAppDispatch } from "../../redux/utils/Product_Utils";
import { fetchOrdersData } from "../../redux/actions/actionAdmin";
import { Heading } from "@chakra-ui/react";


const OrdersAdmin = () => {
  const dispatch = useAppDispatch();
useEffect(()=>{
    dispatch(fetchOrdersData());
},[])
  return (
    <div>
      <Heading textAlign={'center'} color={'teal.500'} m={5}>Orders</Heading>
      <OrdersList/>
    </div>
  )
}

export default OrdersAdmin
