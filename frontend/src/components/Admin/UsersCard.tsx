
import {
  
  Tr,
  Td,
} from '@chakra-ui/react'

import { UserData } from '../../utils/Admin/adminUtils';

const UsersCard = ({user}:{user:UserData}) => {

  return (
    
    <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
    <Td display={['none', 'table-cell']}>{user.id}</Td>
    <Td>{user.username}</Td>
    <Td>{user.email}</Td>
    <Td display={['none', 'table-cell']}>{user.password}</Td>
  </Tr>
  )
}

export  {UsersCard}
