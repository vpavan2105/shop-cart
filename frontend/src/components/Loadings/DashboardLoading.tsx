import { Box, Grid, HStack, Skeleton } from '@chakra-ui/react'


const DashboardLoading = () => {
  return (
   <Box h={'80vh'} display={'flex'} justifyContent={'center'} >
       <Grid templateColumns={'repeat(1,1fr)' }  gap={5}>
         <HStack spacing='24px'>
            <Skeleton w='300px' h={'80px'}/>
            <Skeleton w='300px'  h={'80px'}/>
            <Skeleton w='300px'  h={'80px'}/>

         </HStack>
          <HStack spacing='24px'>
          <Skeleton w='200px' h={'50px'}/>
          <Skeleton w='200px'  h={'50px'}/>
          <Skeleton w='50px'  h={'50px'}/>
          <Skeleton w='200px'  h={'50px'}/>
          <Skeleton w='200px'  h={'50px'}/>
         </HStack>
         <HStack spacing='24px'>
          <Skeleton w='950px' h={'50px'}/>
         </HStack>
       
       </Grid>
   </Box>
  )
}

export default DashboardLoading
