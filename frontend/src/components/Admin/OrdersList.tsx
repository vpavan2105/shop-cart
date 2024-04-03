import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

import {  OrderCard } from './OrderCard'
import { useAppSelector } from '../../redux/utils/Product_Utils';
import { OrderData } from '../../redux/utils/adminUtils'


const OrdersList = () => {

 const {isLoadingFetch,isErrorFetch,ordersData} = useAppSelector(state=>state.orders)
   console.log(ordersData);
  
  

    if(isLoadingFetch) return <div>Loading...</div>
    if(isErrorFetch) return <div>Error</div>
  return (
    <Box display={'flex'} justifyContent={'center'} >
    <SimpleGrid columns={[1, 2, 3]} gap={4}>
  <Box>
    <Heading as="h2" size="md" mb={2}>Pending</Heading>
    {ordersData.map((order: OrderData) => {
      if (order.status === 'Pending') 
        return <OrderCard order={order} key={order.id} />
    })}
  </Box>
  <Box>
    <Heading as="h2" size="md" mb={2}>In Progress</Heading>
    {ordersData.map((order: OrderData) => {
      if (order.status === 'inprogress') 
        return <OrderCard order={order} key={order.id} />
    })}
  </Box>
  <Box>
    <Heading as="h2" size="md" mb={2}>Complete</Heading>
    {ordersData.map((order: OrderData) => {
      if (order.status === 'completed') 
        return <OrderCard order={order} key={order.id} />
    })}
  </Box>
</SimpleGrid>

    </Box>
  )
}

export  {OrdersList}
