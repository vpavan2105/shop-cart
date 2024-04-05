import { Box, Flex, Heading } from '@chakra-ui/react'

import {  OrderCard } from './OrderCard'
import { useAppSelector } from '../../redux/utils/Product_Utils';
import { OrderData } from '../../redux/utils/adminUtils'
import { OrderListLoading } from '../Loadings/OrderListLoading';


const OrdersList = () => {

 const {isLoadingFetch,isErrorFetch,ordersData} = useAppSelector((state:any)=>state.orders)
   console.log(ordersData);
  
  

    if(isLoadingFetch) return <OrderListLoading/>
    if(isErrorFetch) return <div>Error</div>
  return (
    <Box textAlign={'center'} >
    <Flex gap={10} justifyContent={'center'}  minH={'max-content'} flexDir={{'lg':'row',md:'column',base:'column'}}>
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
