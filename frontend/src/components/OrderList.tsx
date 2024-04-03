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
import { CartUrl } from "../ApiUrls";
import { OrderUrl } from "../ApiUrls";
import { FaGooglePay, FaPaypal, FaPhone } from "react-icons/fa";

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

//component
export function OrderList(): ReactElement {
  const [cartProduct, setCartProduct] = useState<Product[] | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedButton, setSelectedButton] = useState<string | null>(null); // State to track the selected button

  const toast = useToast();
  // get userid from local storage
  let user_id: string | undefined; //ip

  const loginDetails = localStorage.getItem("isLoginLocal");
  if (loginDetails !== null) {
    const u_id = JSON.parse(loginDetails);
    const id = u_id.id;
    user_id = id;
  }

  let O_Url: any = OrderUrl;
  const name = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const pincode = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

  const cartUrl = CartUrl;

  useEffect(() => {
    // Calling postData function after totalPrice calculation
    if (cartProduct !== null) {
      console.log(cartProduct);
      postData(cartProduct);
    }
  }, [totalPrice]);

  //handleorder function will call when userv will click on the Place order button
  const handleOrder = () => {
    //getCartProductData function for fetching cartdetails of the user and extract the product array
    async function getCartProductData() {
      try {
        let res = await fetch(`${cartUrl}/${user_id}`);
        let data = await res.json();
        setCartProduct(data.products); //extracting the product array
        setTotalPrice(data.totalAmount);
      } catch (error) {
        console.error(error);
      }
    }
    getCartProductData();
  };

  //Send POST request to the server to create a new order
  async function postData(cartProduct: Product[]) {
    try {
      const currentDate = new Date(); // get the current date and time
      const formattedDate = currentDate.toLocaleString(); // Convert the current date and time to a string representation
      let res = await fetch(`${O_Url}`, {
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
          allProducts: cartProduct,
          totalAmount: totalPrice,
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
          duration: 7000,
          isClosable: true,
          position: "top",
        });

        await handleEmpty(user_id as string);
      }
    } catch (error) {
      toast({
        title: "Order Failed",
        description:
          "Failed to create your order request. Please try again later.",
        status: "error",
        duration: 7000,
        isClosable: true,
        position: "top",
      });

      console.error("Error creating order:", error);
    }
  }



  //Make a PATCH request to make the cart empty
  const handleEmpty = async (u_id: number | string) => {
    try {
      await fetch(`${cartUrl}/${u_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          products: [],
          totalAmount: 0,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to set payment mode
  const setPayment = (mode: string) => {
   
    setSelectedButton(mode); // Set the selected button
  };

  return (
    <Center>
    <Card w={{base:"90%", md:"80%", lg:"60%"}} p="20px" mt="50px" boxShadow="lg">
      <FormControl >
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
        <Center>
       
        </Center>
      </FormControl>
      
      <Box mt="30px">
          <FormLabel>Payment Mode</FormLabel>
          <Flex>
            <Button
              mr="10px"
              bg={selectedButton === "cash" ? "orange" : "Brown"}
              color="white"
              variant="outline"
              onClick={() => setPayment("cash")}
            >
              Cash on Delivery
            </Button>
            <Button
              mr="10px"
              bg={selectedButton === "phonepe" ? "orange" : "rgb(95,37,159)"}
              color="white"
              variant="outline"
              onClick={() => setPayment("phonepe")}
              leftIcon={<FaPhone />}
            >
              PhonePe
            </Button>
            <Button
              mr="10px"
              bg={selectedButton === "gpay" ? "orange" : "rgb(26,115,232)"}
              color="white"
              variant="outline"
              onClick={() => setPayment("gpay")}
              leftIcon={<FaGooglePay />}
            >
              GPay
            </Button>
            <Button
              bg={selectedButton === "paytm" ? "orange" : "rgb(23,43,117)"}
              color="white"
              variant="outline"
              onClick={() => setPayment("paytm")}
              leftIcon={<FaPaypal />}
            >
              Paytm
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
