import { Box, Button, Flex, Heading,Text } from '@chakra-ui/react'
import { OrderData, useAppDispatch } from '../../redux/utils/adminUtils';
import { updateOrderData } from '../../redux/actions/actionAdmin';


const OrderCard = ({order}:{order:OrderData}) => {
    const dispatch = useAppDispatch();
    const toggleStatusOrder = () => {
        const payload = {
            status:!order.status
        }
        dispatch(updateOrderData(payload,order.id))
    }
  return (
    <Flex
    flexDir={'column'}
    boxShadow={'lg'}
    p={3}
    gap={3}
    w={['100%', '300px']} // Responsive width
    bgColor={order.status ? 'skyblue' : 'crimson'}
    color={'white'}
  >
       <Heading>{order.orderId}  {order.userId}</Heading>
       <Text>{order.products}</Text>
       <Text>Address</Text>
       <Box>
         <Text> {order.address.street}</Text>
         <Text> {order.address.City}</Text>
         <Text> {order.address.State}</Text>
         <Text> {order.address.Country}</Text>
       </Box>
       <Heading size={'md'}>{order.date}</Heading>
       <Button onClick={toggleStatusOrder}>{order.status ? "successful" : "on progrss"}</Button>
    </Flex>
  )
}

export  {OrderCard}
