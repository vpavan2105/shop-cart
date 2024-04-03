
import { ReactElement, useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Center,
  Card,
  Box,
  Flex,
} from "@chakra-ui/react";
import { OrderUrl } from "../../ApiUrls";
import { FaGooglePay, FaPhone } from "react-icons/fa";
import { useParams } from "react-router";
import { ProductUrl } from "../../ApiUrls";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { SiPaytm } from "react-icons/si";

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

export function BuyPayment(): ReactElement | undefined {
  const { id } = useParams<{ id: string | undefined }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>(null); // State to track the selected button

  useEffect(() => {
    // Calling postData function after totalPrice calculation
    if (product !== null) {
      postData(product);
    }
  }, [product]);

  const toast = useToast();
  // get userid from local storage
  let user_id: string | undefined;

  const loginDetails = localStorage.getItem("isLoginLocal");
  if (loginDetails !== null) {
    const u_id = JSON.parse(loginDetails);
    const id = u_id.id;
    user_id = id;
  }

  const handleOrder = async () => {
    const res = await fetch(`${ProductUrl}/${id}`);
    const data: Product | Record<string, never> = await res.json();

    if (res.ok && Object.keys(data).length > 0) {
      setProduct(data as Product);
    } else {
      toast({
        title: "Product is not found",
        description:
          "Product is not found with the given product id. Unable to process the order.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  const name = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const pincode = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

  //Send POST request to the server to create a new order
  async function postData(product: Product) {
    try {
      const currentDate = new Date(); // get the current date and time
      const formattedDate = currentDate.toLocaleString(); // Convert the current date and time to a string representation
      const res = await fetch(`${OrderUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: user_id,
          name: name.current?.value,
          address: [
            address.current?.value,
            pincode.current?.value,
            city.current?.value,
            state.current?.value,
            country.current?.value,
          ],
          date: formattedDate,
          allProducts: [product],
          totalAmount: product.price,
          status: "Pending",
        }),
      });

      //setting input filed empty after placing order
      if (name.current !== null) {
        name.current.value = "";
      }
      if (address.current !== null) {
        address.current.value = "";
      }
      if (pincode.current !== null) {
        pincode.current.value = "";
      }
      if (city.current !== null) {
        city.current.value = "";
      }
      if (state.current !== null) {
        state.current.value = "";
      }
      if (country.current !== null) {
        country.current.value = "";
      }

      if (res.ok) {
        toast({
          title: "Order Successful!",
          description:
            "Your order request has been created successfully. Please navigate to the order page to check the order status.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Order Failed",
        description:
          "Failed to create your order request. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      console.error("Error creating order:", error);
    }

    setSelectedButton(null);
  }

  // Function to set payment mode
  const setPayment = (mode: string) => {
    setSelectedButton(mode); // Set the selected button
  };

  return (
    <Center>
      <Card
        w={{ base: "90%", md: "80%", lg: "60%" }}
        p="20px"
        mt="50px"
        boxShadow="lg"
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" ref={name} />
          <FormLabel>Address</FormLabel>
          <Input placeholder="Address" ref={address} />
          <FormLabel>Pincode</FormLabel>
          <Input placeholder="Pincode" ref={pincode} />
          <FormLabel>City</FormLabel>
          <Input placeholder="City" ref={city} />
          <FormLabel>State</FormLabel>
          <Input placeholder="State" ref={state} />
          <FormLabel>Country</FormLabel>
          <Input placeholder="Country" ref={country} />
          <Center></Center>
        </FormControl>

        <Box mt="30px">
          <FormLabel>Payment Mode</FormLabel>
          <Flex>
            <Button
              mr="10px"
              bg="Brown"
              color="white"
              variant="outline"
              onClick={() => setPayment("cash")}
            >
              Cash on Delivery
              {selectedButton === "cash" && (
                <CheckCircleIcon
                  position="absolute"
                  top="-1"
                  right="-1"
                  color="#0ff408"
                  boxSize="15px"
                />
              )}
            </Button>

            <Button
              mr="10px"
              bg="rgb(95,37,159)"
              color="white"
              variant="outline"
              onClick={() => setPayment("phonepe")}
              leftIcon={<FaPhone />}
            >
              PhonePe
              {selectedButton === "phonepe" && (
                <CheckCircleIcon
                  position="absolute"
                  top="-1"
                  right="-1"
                  color="#0ff408"
                  boxSize="15px"
                />
              )}
            </Button>

            <Button
              mr="10px"
              bg="rgb(26,115,232)"
              color="white"
              variant="outline"
              onClick={() => setPayment("gpay")}
              leftIcon={<FaGooglePay />}
            >
              GPay
              {selectedButton === "gpay" && (
                <CheckCircleIcon
                  position="absolute"
                  top="-1"
                  right="-1"
                  color="#0ff408"
                  boxSize="15px"
                />
              )}
            </Button>

            <Button
              mr="10px"
              bg="rgb(23,43,117)"
              color="white"
              variant="outline"
              onClick={() => setPayment("paytm")}
              leftIcon={<SiPaytm />}
            >
              Paytm
              {selectedButton === "paytm" && (
                <CheckCircleIcon
                  position="absolute"
                  top="-1"
                  right="-1"
                  color="#0ff408"
                  boxSize="15px"
                />
              )}
            </Button>
          </Flex>
        </Box>

        <Button
          mt="30px"
          bg="rgb(34,195,94)"
          color="white"
          variant="outline"
          onClick={handleOrder}
        >
          Place Order
        </Button>
      </Card>
    </Center>
  );
}