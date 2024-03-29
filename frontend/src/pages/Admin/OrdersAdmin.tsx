import { useEffect } from "react"
import { OrdersList } from "../../components/Admin/OrdersList"
import { useAppDispatch } from "../../utils/Admin/adminUtils"
import { fetchOrdersData } from "../../redux/action";


const OrdersAdmin = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
      dispatch(fetchOrdersData())
    },[])
  return (
    <div>
      <OrdersList/>
    </div>
  )
}

export default OrdersAdmin
