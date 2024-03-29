import { useAppSelector } from "../../redux/utils/adminUtils";
import { Box, Flex, Heading,Text, useBreakpointValue } from "@chakra-ui/react"
import OrderLineComponents from "./OrdersLineComponents";
import AreaChartComponent from "./AreaChartCompoent";
import { faBookmark, faHouseUser, faMoneyCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashBoardAdmin = () => {
    const users:number = useAppSelector(state=>state.users.usersData).length
    const orders:number = useAppSelector(state=>state.orders.ordersData).length
    const revenue :number= useAppSelector(state=>state.orders.ordersData).reduce((acc, curr) => acc + curr.total, 0);
    console.log(revenue)
    const cardWidth = useBreakpointValue({ base: "100%", sm: "30%", md: "30%", lg: "30%" });

  return (
    <Box className="dashboard-container" p={4}>
      <Heading mb={3} mt={3} p={2} >
        <FontAwesomeIcon icon={faHouseUser} size="sm" style={{ color: "#63E6BE" }} /> Dashboard
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Box className="dashboard-cards" p={4} width={cardWidth} bgGradient="linear(to-l, #536976, #292E49)">
          <Text fontWeight="bold" color="white">
            Users<FontAwesomeIcon icon={faUser} style={{ color: "white", paddingLeft: '10px' }} />
          </Text>
          <Heading color="white" >{users}</Heading>
        </Box>
        <Box className="dashboard-cards" p={4} width={cardWidth} bgGradient="linear(to-l, #f0c27b, #4b1248)">
          <Text fontWeight="bold" color="white">
            Revenue<FontAwesomeIcon icon={faMoneyCheck} style={{ color: "white", paddingLeft: '10px' }} />
          </Text>
          <Heading color="white" >${revenue}</Heading>
        </Box>
        <Box className="dashboard-cards" p={4} width={cardWidth} bgGradient="linear(to-l, #3a7bd5, #3a6073)">
          <Text fontWeight="bold" color="white">
            Orders<FontAwesomeIcon icon={faBookmark} style={{ color: "white", paddingLeft: '10px' }} />
          </Text>
          <Heading color="white" >{orders}</Heading>
        </Box>
      </Flex>
      <Flex  flexWrap="wrap" justifyContent="center" alignItems={'center'} mt={8}>
        <Box width={{ base: "100%", md: "50%" }}>
          <AreaChartComponent />
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <OrderLineComponents />
        </Box>
      </Flex>
    </Box>
  )
}

export default DashBoardAdmin
