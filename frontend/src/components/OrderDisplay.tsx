import { ReactElement, useState, useEffect } from "react";
import {
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Divider,
  Box,
  Center,
} from "@chakra-ui/react";

import { OrderUrl } from "../ApiUrls";

interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

interface Product {
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
interface OrderObject {
  id: string;
  userid: string;
  address: Location[];
  date: string;
  allProducts: Product[];
  totalAmount: number;
  status: boolean;
}
export function OrderDisplay(): ReactElement {
  const [orders, setOrders] = useState<null | OrderObject[]>(null);
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
    try {
      let res = await fetch(`${orderPageUrl}`);
      let data = await res.json();
      orderOfThatUser(data);
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
  }

  return (
    <Box w="100%" justifyContent="center">
      <Heading as="h2" size="3xl">
        Your Orders
      </Heading>
      {orders &&
        orders.map((order) => (
          <div key={order.id}>
            {order.allProducts.length > 0 && (
              <Center>
                <SimpleGrid
                  boxShadow="dark-lg"
                  p="6"
                  rounded="md"
                  bg="white"
                  w="50%"
                >
                  <Card boxShadow="md" p="6" rounded="md" bg="white">
                    {order.allProducts.map((product) => (
                      <CardBody key={product.id} border="1px solid">
                        <Image
                          src={product.image}
                          alt={product.title}
                          border="1px solid"
                          width={100}
                        />
                        <Text width="100%" border="1px solid">
                          {product.title}
                        </Text>
                        <Text width="100%" border="1px solid">
                          ₹ {product.price}
                        </Text>
                        <Divider />
                      </CardBody>
                    ))}
                    <Box display="flex" justifyContent="space-around">
                      <Button bg="orange" width="150px">
                        Total - {order.totalAmount}
                      </Button>
                      <Button width="150px" bg="lightgreen">
                        {order.status}
                      </Button>
                    </Box>
                  </Card>
                </SimpleGrid>
              </Center>
            )}

            {order.allProducts.length === 0 && (
              <Text>No products found for this order.</Text>
            )}
            <Divider my={8} color="red" />
          </div>
        ))}
    </Box>
  );
}
