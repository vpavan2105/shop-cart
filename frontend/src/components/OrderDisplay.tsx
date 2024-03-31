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

} from "@chakra-ui/react";
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
  const userId: string = "1";
  const orderPageUrl="http://localhost:3001/orders";
  // const orderPageUrl='https://shop-cart-x0xf.onrender.com/orders';
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
    console.log(userOrders);
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
              <SimpleGrid boxShadow='dark-lg' p='6' rounded='md' bg='white' w="50%">
                <Card boxShadow='md' p='6' rounded='md' bg='white'>
                  {order.allProducts.map((product) => (
                    <CardBody>
                      <Image
                        src={product.image}
                        alt={product.title}
                        display="inline"
                        width={100}
                      />
                      <span>{product.title}</span>
                      <Text>₹ {product.price}</Text>
                    </CardBody>
                  ))}
                  <Button bg="orange" width="150px">Total - {order.totalAmount}</Button>
                </Card>
              </SimpleGrid>
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



