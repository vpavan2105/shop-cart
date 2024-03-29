
import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { UserData } from '../../redux/utils/adminUtils';
import { UsersCard } from './UsersCard';
import { useAppSelector } from '../../redux/utils/Product_Utils';

const UsersList = () => {

  const {isLoading,isError,usersData} = useAppSelector(state=>state.users)
  // useEffect(()=>{
   
  // },[])
  if(isLoading) return <div>loading</div>
  if(isError) return <div>error</div>

  return (
    <TableContainer>
      <Table variant='simple' borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
        <TableCaption>Users Table</TableCaption>
        <Thead>
          <Tr>
            <Th display={['none', 'table-cell']}>UserID</Th>
            <Th>User Name</Th>
            <Th>Email</Th>
            <Th display={['none', 'table-cell']}>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersData.map((user:UserData) => (
            <UsersCard key={user.id} user={user}  />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export  {UsersList}
