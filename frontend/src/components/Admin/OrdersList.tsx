import { Box, SimpleGrid } from '@chakra-ui/react'

import { OrderCard } from './OrderCard'

import { OrderData, useAppSelector } from '../../redux/utils/adminUtils'

const OrdersList = () => {

 const {isLoadingFetch,isErrorFetch,ordersData} = useAppSelector(state=>state.orders)
   console.log(ordersData);
   

    if(isLoadingFetch) return <div>Loading...</div>
    if(isErrorFetch) return <div>Error</div>
  return (
    <Box display={'flex'} justifyContent={'center'} >
    <SimpleGrid columns={[1, 2, 3]} gap={4}>
      {ordersData.map((order:OrderData)=>{
        return <OrderCard order={order} key={order.id} />
      })}
    </SimpleGrid>
    </Box>
  )
}

export  {OrdersList}
