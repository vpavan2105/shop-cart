import {  Button, Flex, Heading,Text } from '@chakra-ui/react'
import { OrderData } from '../../redux/utils/adminUtils';

import { useAppDispatch, useAppSelector} from '../../redux/utils/Product_Utils'

import { Link } from 'react-router-dom';
import { updateOrderData } from '../../redux/actions/actionAdmin';


const OrderCard = ({order}:{order:OrderData}) => {

    const dispatch = useAppDispatch();
    const toggleStatusOrder = (order:OrderData) => {
        const payload = {
            status:!order.status
        }
        dispatch(updateOrderData(payload,order.id))
    }
    const statusColor = order.status ? 'green.200' : 'yellow.200';
  return (
    <Flex
    flexDir={'column'}
    boxShadow={'lg'}
    p={3}
    fontFamily={'sans-serif'}
    gap={3}
    w={['100%', '300px']} // Responsive width
    bgColor={'gray.100'} // Background color for the entire order item
    borderRadius={'md'} // Rounded corners
    _hover={{
        bgColor: 'gray.200', // Background color on hover
    }}
    color={'gray.800'} // Text color
>

    <Text fontSize={['sm', 'md']}>User : {order.name}</Text>
    <Heading size={'sm'}>Products</Heading>
    {order.allProducts.map((prod, index) => (
        <Text key={index} fontSize={['sm', 'md']} >
            {prod.title}
        </Text>
    ))}
    <Text fontSize={['sm', 'md']} fontWeight={'bold'}>
        Total Price: {order.totalAmount}
    </Text>
    <Text fontSize={['sm', 'md']}>Date : {order.date}</Text>
    <Button
        fontSize={['sm', 'md']}
        onClick={() => toggleStatusOrder(order)}
        bgColor={statusColor}
        color={'white'} // Button text color
    >
        {order.status ? 'Successful' : 'On Progress'}
    </Button>
    <Link to={`/ordersadmin/${order.id}`}>
        <Button fontSize={['sm', 'md']} color={'blue'} border={'1px solid'}>Show More</Button>
    </Link>
</Flex>
  )
}

export  {OrderCard}

