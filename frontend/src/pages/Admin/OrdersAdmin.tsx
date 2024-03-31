import { useEffect } from "react"
import { OrdersList } from "../../components/Admin/OrdersList"
import { useAppDispatch } from "../../redux/utils/Product_Utils";
import { fetchOrdersData } from "../../redux/actions/actionAdmin";


const OrdersAdmin = () => {
  const dispatch = useAppDispatch();
useEffect(()=>{
    dispatch(fetchOrdersData());
},[])
  return (
    <div>
      <OrdersList/>
    </div>
  )
}

export default OrdersAdmin
