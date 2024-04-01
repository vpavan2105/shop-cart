import { Box, Grid, HStack, Skeleton, Stack } from '@chakra-ui/react'


const DashboardLoading = () => {
  return (
   <Box>
       <Grid templateColumns={'repeat(1,1fr)' } alignItems={'center'} gap={3}>
         <HStack spacing='24px'>
            <Skeleton w='100px' h={'42px'}/>
            <Skeleton w='100px'  h={'42px'}/>
            <Skeleton w='100px'  h={'42px'}/>
         </HStack>
          <HStack spacing='24px'>
          <Skeleton w='100px' h={'42px'}/>
          <Skeleton w='100px'  h={'42px'}/>
          <Skeleton w='100px'  h={'42px'}/>
         </HStack>
         <HStack spacing='24px'>
          <Skeleton w='100px' h={'42px'}/>
          <Skeleton w='100px'  h={'42px'}/>
          <Skeleton w='100px'  h={'42px'}/>
         </HStack>
       </Grid>
   </Box>
  )
}

export default DashboardLoading
