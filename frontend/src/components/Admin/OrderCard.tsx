import {  Button, Flex, Heading,Text } from '@chakra-ui/react'
import { OrderData } from '../../redux/utils/adminUtils';

import { useAppDispatch, useAppSelector} from '../../redux/utils/Product_Utils'

import { Link } from 'react-router-dom';
import { updateOrderData } from '../../redux/actions/actionAdmin';


const OrderCard = ({order}:{order:OrderData}) => {

    const dispatch = useAppDispatch();
    const toggleStatusOrder = (order:OrderData) => {
        const payload = {
            status:"Inprogress"
        }
        dispatch(updateOrderData(payload,order.id))
    }
    const statusColor = order.status === "Pending"
    ? "yellow.200"
    : order.status === "Inprogress"
    ? "orange.200"  :"teal.200"  
  return (
    <Flex
    flexDir={'column'}
    boxShadow={'lg'}
    p={3}
    m={3}
    fontFamily={'sans-serif'}
    gap={3}
    w={['100%', '300px']} 
    bgColor={'gray.100'} 
    borderRadius={'md'}


>

    <Text fontSize={['sm', 'md']} fontWeight={'bold'}>User : {order.name}</Text>
    <Heading size={'sm'}>Products : {order.allProducts.length}</Heading>
  
    <Text fontSize={['sm', 'md']} fontWeight={'bold'}>
        Total Price: {order.totalAmount}
    </Text>
    <Button
        fontSize={['sm', 'md']}
        onClick={() => toggleStatusOrder(order)}
        bgColor={statusColor}
        size={'sm'}
        color={'white'} 
        isDisabled={order.status == "Inprogress" || order.status == "Success"} 
    >
        {order.status}
    </Button>
    <Link to={`/ordersadmin/${order.id}`}>
        <Button fontSize={['sm', 'md']} size={'sm'} color={'blue.400'} border={'1px solid'} >Show More</Button>
    </Link>
</Flex>
  )
}

export  {OrderCard}

