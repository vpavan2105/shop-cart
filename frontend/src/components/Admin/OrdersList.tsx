import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'

import {  OrderCard } from './OrderCard'
import { useAppSelector } from '../../redux/utils/Product_Utils';
import { OrderData } from '../../redux/utils/adminUtils'


const OrdersList = () => {

 const {isLoadingFetch,isErrorFetch,ordersData} = useAppSelector(state=>state.orders)
   console.log(ordersData);
  
  

    if(isLoadingFetch) return <div>Loading...</div>
    if(isErrorFetch) return <div>Error</div>
  return (
    <Box>
    <Flex gap={3} justifyContent={'space-around'} flexDir={{'lg':'row',md:'column',base:'column'}}>
  <Box minH={'100px'}>
    <Heading as="h2" size="md" mb={2}>Pending</Heading>
    {ordersData.map((order: OrderData) => {
      if (order.status === 'Pending') 
        return <OrderCard order={order} key={order.id} />
    })}
  </Box>
  <Box minH={'100px'}>
    <Heading as="h2" size="md" mb={2}>In Progress</Heading>
    {ordersData.map((order: OrderData) => {
      if (order.status === 'Inprogress') 
        return <OrderCard order={order} key={order.id} />
    })}
  </Box>
  <Box minH={'100px'}>
    <Heading as="h2" size="md" mb={2}>Complete</Heading>
    {ordersData.map((order: OrderData) => {
      if (order.status === 'Success') 
        return <OrderCard order={order} key={order.id} />
    })}
  </Box>
</Flex>

    </Box>
  )
}

export  {OrdersList}
