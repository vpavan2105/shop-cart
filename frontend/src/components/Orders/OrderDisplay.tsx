import { ReactElement, useState, useEffect } from "react";
import {
  Heading,
  Card,
  Text,
  Button,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { OrderUrl } from "../../ApiUrls";
import { CgBorderTop } from "react-icons/cg";
import { useNavigate } from "react-router";
import { Footer } from "../../pages/Footer";
import axios from "axios";

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
  quantity: number;
}
export interface OrderObject {
  id: string;
  userid: string;
  address: Location[];
  date: string;
  allProducts: Product[];
  totalAmount: number;
  status: string;
}
export function OrderDisplay(): ReactElement {
  const [orders, setOrders] = useState<null | OrderObject[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  // get userid from local storage
  let userId: string | undefined; //ip

  const loginDetails = localStorage.getItem("isLoginLocal");
  if (loginDetails !== null) {
    const u_id = JSON.parse(loginDetails);
    const id = u_id.id;
    userId = id;
  }

  const orderPageUrl = OrderUrl;

  async function getAllOrders() {
    setIsLoading(true);
    try {
      let res = await fetch(`${orderPageUrl}`);
      let data = await res.json();

      orderOfThatUser(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []); // Call getAllOrders only once when component mounts

  function orderOfThatUser(data: OrderObject[]) {
    let userOrders = data.filter((element) => element.userid == userId);
    setOrders(userOrders);
    setIsLoading(!isLoading);
    console.log(orders);
  }

  const displayEach = (orderid: string) => {
    localStorage.setItem("orderid", orderid);
    navigate(`/each-order/${orderid}`);
  };
  const handlePendingOrder = (id:string) => {
     setIsLoading(true);
    axios.patch(`${OrderUrl}/${id}`,{status:'Success'})
    .then(res=>{
      console.log(res.data);
      const updatedOrders : any = orders?.map((order)=>{
      return   order.id == res.data.id ? res.data : order
      })

      
      setOrders(updatedOrders)
      setIsLoading(false);
      
    })
    .catch(error => {
      console.log(error);
      
    })
  }

  return (
    <>
    <Box w="100%" justifyContent="center">
      {isLoading ? (
        <Center height="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.400"
            size="xl"
          />
        </Center>
      ) : (
        <Box>
          {orders && orders.length > 0 ? (
            <div>
              <Center>
                <Heading as="h2" size="2xl" my="15px" fontFamily="revert">
                  Your Orders
                </Heading>
              </Center>
              <Center>
                <Box
                  boxShadow="lg"
                  w={{ base: "100%", md: "80%", lg: "50%" }}
                  p="20px"
                  display="flex"
                  flexDirection="column"
                  bg="rgb(250, 251, 250)"
                  borderRadius="10px"
                >
                  {orders.map((order) => (
                    <Card
                      boxShadow="md"
                      p="6"
                      rounded="md"
                     key={order.id}
                      mt="10px"
                      mb="10px"
                      h="150px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      bg= {order.status === "Pending"
                      ? "yellow.200"
                      : order.status === "Inprogress"
                      ? "orange.200"  :"teal.200"  }
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                       
                      >
                        <Heading as="h6" fontSize="12px">
                          Order Id :{" "}
                        </Heading>
                        <Text fontSize="12px">{order.id}</Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Heading as="h5" fontSize="12px">
                          Total Amount :
                        </Heading>
                        <Text fontSize="12px"> $ {order.totalAmount}</Text>{" "}
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Heading as="h5" fontSize="12px">
                          Order Status :
                        </Heading>
                        <Button
                          isDisabled={order.status === "Pending" || order.status === "Completed"}
                          borderRadius="5px"
                          color="black"
                         fontWeight={'bold'}
                          onClick={()=>handlePendingOrder(order.id)}
                          size={'sm'}
                        >
                        
                          {order.status}
                        </Button>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Heading as="h5" fontSize="12px">
                          Order Details :
                        </Heading>
                        <Button
                          size="xs"
                          fontSize="12px"
                          bgColor="pink.100"
                          onClick={() => {
                            displayEach(order.id);
                          }}
                        >
                          {" "}
                          Click here
                        </Button>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </Center>
            </div>
          ) : (
            <Box
              w="100%"
              h="80vh"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <CgBorderTop
                style={{ fontSize: "8em", color: "rgb(126, 146, 255)" }}
              />
              <Heading>No Order Found</Heading>
            </Box>
          )}
        </Box>
      )}
     
    </Box>
     <Footer/>
     </>
  );
  
}
