import { ReactElement, useEffect, useRef, useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { CartUrl } from "../ApiUrls";
import { useContext } from "react";
import { OrderUrl } from "../ApiUrls";
import {
  AuthContext,
  LogUserDetails,
} from './../contexts/AuthContextProvider';
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
  const auth = useContext(AuthContext);
  let user_id = auth.userLoggedIn.id;
  let O_Url:any = OrderUrl;
  const name = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const pincode = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

 const cartUrl=CartUrl;

  useEffect(() => {
    // Calling postData function after totalPrice calculation
    if (cartProduct !== null) {
      console.log(cartProduct);
      postData(cartProduct);
      handleEmpty(user_id);

    }
  }, [totalPrice]);


  //handleorder function will call when userv will click on the Place order button
  const handleOrder = () => {

    //getCartProductData function for fetching cartdetails of the user and extract the product array
    async function getCartProductData() {
      try {
        let res = await fetch(`${cartUrl}/${user_id}`);
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
      await fetch(`${O_Url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid:user_id ,
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


  //Send POST request to make empty product array
  const handleEmpty = (u_id: number | string) => {
    async function emptyProductArray() {
      try {
        await fetch(`${cartUrl}/${u_id}`, {
          method: "PUT",
          body: JSON.stringify({
            products: [],
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
    emptyProductArray();
  };
 


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


