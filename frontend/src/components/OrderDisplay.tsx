import { ReactElement, useState, useEffect } from "react";
import {
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Divider
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
  const userId: string = "3";

  async function getAllOrders() {
    try {
      let res = await fetch(`http://localhost:3001/orders`);
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



<>
    <Heading as="h2" size="3xl">
      Your Orders
    </Heading>
    {orders && orders.map((order) => (
      <div key={order.id}>
        {order.allProducts.length > 0 && (
          <SimpleGrid>
            <Card>
            {order.allProducts.map((product) => (
                <CardBody>
                <Image src={product.image} alt={product.title} display="inline" width={100}/>
                <span >{product.title}</span>
                  <Text>₹ {product.price}</Text>
                </CardBody>
                
            ))}
            <Button>Total - {order.totalAmount}</Button>
            </Card>
          </SimpleGrid>
        )}
        
        {order.allProducts.length === 0 && (
          <Text>No products found for this order.</Text>
        )}
        <Divider my={8} color="red" />
      </div>
    ))}
  </>    
  );
}


