
import {
  
  Tr,
  Td,
} from '@chakra-ui/react'

import { UserData } from '../../redux/utils/adminUtils';
import { useNavigate } from 'react-router-dom';

const UsersCard = ({user}:{user:UserData}) => {
  const navigate = useNavigate();
  const handleNavigateClick = () => {
    navigate(`/usersadmin/${user.id}`)
  }

  return (
    <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }} onClick={handleNavigateClick}>
    <Td display={['none', 'table-cell']}>{user.id}</Td>
    <Td>{user.username}</Td>
    <Td>{user.email}</Td>
    <Td display={['none', 'table-cell']}>{user.password}</Td>

  </Tr>
  )
}

export  {UsersCard}
