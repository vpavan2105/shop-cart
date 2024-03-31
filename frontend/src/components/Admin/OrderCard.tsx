import {  Button, Flex, Heading,Text } from '@chakra-ui/react'
import { OrderData } from '../../redux/utils/adminUtils';

import { useAppSelector} from '../../redux/utils/Product_Utils'

import { Link } from 'react-router-dom';


const OrderCard = ({order,toggleStatusOrder}:{order:OrderData,toggleStatusOrder:(order:OrderData)=>void}) => {
    const {isLoadingUpdate} = useAppSelector(state=>state.orders)
  
    const statusColor = order.status ? 'skyblue' : 'yellow';
  return (
    <Flex
    flexDir={'column'}
    boxShadow={'lg'}
    p={3}
    gap={3}
    w={['100%', '300px']} // Responsive width
    bgColor={statusColor}
>
    <Heading>{order.orderId} {order.userid}</Heading>
    <Text>{order.name}</Text>
    {order.allProducts.map((prod, index) => (
        <Heading key={index} size={'md'}>{prod.title}</Heading>
    ))}
    <Heading size={'sm'}>Total Price: {order.totalAmount}</Heading>
    <Heading size={'md'}>{order.date}</Heading>
    <Button onClick={()=>toggleStatusOrder(order)} isLoading={isLoadingUpdate} loadingText="Updating...">
        {order.status ? "Successful" : "On Progress"}
    </Button>
    <Link to={`/ordersadmin/${order.id}`}>
        <Button>Show More</Button>
    </Link>
</Flex>
  )
}

export  {OrderCard}
