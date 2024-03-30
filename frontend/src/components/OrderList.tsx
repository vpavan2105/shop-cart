import { ReactElement, useEffect, useRef, useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

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
  // get userid from local storage
  let user_id = 3; //here hardcoded
  const name = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const pincode = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

 

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
        let res = await fetch(`http://localhost:3001/carts/${user_id}`);
        let data = await res.json();
        setCartProduct(data.products);  //extracting the product array
        setTotalPrice(data.totalAmount)
      } catch (error) {
        console.error(error);
      }
    }
    getCartProductData();
  };

//Send POST request to the server to create a new order
  async function postData(cartProduct: Product[]) {
    try {
      uuidv4(); //generate a UUID for the order ID
      const currentDate = new Date(); // get the current date and time
      const formattedDate = currentDate.toLocaleString(); // Convert the current date and time to a string representation
      await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: "3",
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
          status:false
        }),
      });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }
  return (
    <>
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
        <Button
          bg="yellow"
          color="black"
          variant="outline"
          onClick={handleOrder}
        >
          Place Order
        </Button>
      </FormControl>
    </>
  );
}


