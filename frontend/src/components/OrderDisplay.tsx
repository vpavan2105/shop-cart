import { ReactElement, useState, useEffect } from "react";
import {
  Heading,
  Divider,
  SimpleGrid,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Button,
  Text,
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
   
  </>




    
  );
}
