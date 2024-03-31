import { Box, SimpleGrid } from '@chakra-ui/react'

import { OrderCard } from './OrderCard'
import { useAppDispatch, useAppSelector } from '../../redux/utils/Product_Utils';
import { OrderData } from '../../redux/utils/adminUtils'
import { updateOrderData } from '../../redux/actions/actionAdmin';


const OrdersList = () => {

 const {isLoadingFetch,isErrorFetch,ordersData} = useAppSelector(state=>state.orders)
   console.log(ordersData);
   const dispatch = useAppDispatch();
   const toggleStatusOrder = (order:OrderData) => {
    const payload = {
        status:!order.status
    }
    dispatch(updateOrderData(payload,order.id))
}

    if(isLoadingFetch) return <div>Loading...</div>
    if(isErrorFetch) return <div>Error</div>
  return (
    <Box display={'flex'} justifyContent={'center'} >
    <SimpleGrid columns={[1, 2, 3]} gap={4}>
      {ordersData.map((order:OrderData)=>{
        return <OrderCard order={order} key={order.id} toggleStatusOrder={toggleStatusOrder}/>
      })}
    </SimpleGrid>
    </Box>
  )
}

export  {OrdersList}
