import { useEffect, useState } from "react";
import { OrderUrl } from "../ApiUrls";
import { Product } from "./OrderDisplay";
import { Card, Image, Text, Box, Heading, Center } from "@chakra-ui/react";
function EachOrderDisplay() {
  const [orderData, setOrderData] = useState<Product[] | null>(null);
  let orderid: string;
  const o_id = localStorage.getItem("orderid");
  if (o_id !== null) {
    orderid = o_id;
  }

  useEffect(() => {
    async function getOrderData() {
      try {
        let res = await fetch(`${OrderUrl}/${orderid}`);
        let data = await res.json();
        setOrderData(data.allProducts);
        console.log(orderData);
      } catch (error) {
        console.error(error);
      }
    }
    getOrderData();
  }, []);

  return (
    <>
      <Center>
        <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
          <Heading my="15px">Order Details</Heading>
          <Card boxShadow="md" p="6" rounded="md" bg="white">
            {orderData &&
              orderData.map((element) => (
                <Box
                  maxW={{ base: "80%", md: "85%", lg: "100%" }}
                  p="6"
                  boxShadow="Outline"
                  // border="1px solid gray"
                  bg="white"
                  borderRadius="lg"
                  display="flex"
                  justifyContent={{
                    base: "center",
                    md: "space-around",
                    lg: "space-around",
                  }}
                  alignContent={{ base: "space-around", md: "center" }}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  mb="4"
                >
                  <Box width="150px" h="150px">
                    <Image
                      w="100%"
                      h="100%"
                      src={element.image}
                      alt={element.title}
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={{
                      base: "center",
                      md: "space-around",
                      lg: "space-around",
                    }}
                  >
                    <Heading fontSize="15px" as="h6">
                      {element.title.length > 20
                        ? `${element.title.slice(0, 20)}...`
                        : element.title}
                    </Heading>
                    <Text>Price:{element.price}</Text>
                  </Box>
                </Box>
              ))}
          </Card>
        </Box>
      </Center>
    </>
  );
}

export default EachOrderDisplay;
