import { ReactElement, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { CartUrl } from "../../ApiUrls";
import { Box, Button, Center, Heading, Spinner } from "@chakra-ui/react";
import { BsFillBagDashFill } from "react-icons/bs";
import { Text } from "recharts";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Footer } from "../../pages/Footer";


export interface ProductDetails {
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

export interface CartData {
  id: string;
  user_id: string;
  products: ProductDetails[]; //k
  totalAmount: number;
}
export enum IncDec {
  inc = 1,
  dec = 0,
}
function CartList(): ReactElement {
  const [cartProduct, setCartProduct] = useState<CartData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  let u_id: string | undefined; //ip
  const loginDetails = localStorage.getItem("isLoginLocal");
  if (loginDetails !== null) {
    const user_id = JSON.parse(loginDetails);
    const id = user_id.id;
    u_id = id;
  }

  const cartUrl = CartUrl;

  // getting cart data from the server
  useEffect(() => {
    fetch(`${cartUrl}/${u_id}`)
      .then((res) => res.json())
      .then((data: CartData) => {
        console.log(`${cartUrl}/${u_id}`);
        setCartProduct(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [toggle]);

  //Handling each product increment and decrement
  const handleIncOrDec = (p_id: number, val: number) => {
    async function updateData(u_id: string) {
      try {
        // Get all cart details of an user using cartId
        let res = await fetch(`${cartUrl}/${u_id}`);
        let data: CartData = await res.json();

        let productsArray = data.products; //k

        // Increasing product quantity for a particular product in the cart
        if (val === 1) {
          productsArray.forEach((product) => {
            if (product.id === p_id) {
              product.quantity += 1;
            }
          });
        }
        // Decreasing product quantity for a partcular product in the cart
        else {
          productsArray.forEach((product) => {
            if (product.id === p_id) {
              product.quantity -= 1;
            }
          });

          //If the quantity will be zero then that product will be removed from the array
          productsArray = productsArray.filter(
            (product) => product.quantity > 0
          );
        }

        // Recalculate totalAmount after changing product quantity
        let newTotalAmount = productsArray.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
        newTotalAmount = parseFloat(newTotalAmount.toFixed(2)); //rounding to 2 decimal places
        // Update cart details of the user using u_id
        let res2 = await fetch(`${cartUrl}/${u_id}`, {
          method: "PATCH",
          body: JSON.stringify({
            products: productsArray,
            totalAmount: newTotalAmount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res2.ok) setToggle(!toggle);
      } catch (err) {
        console.error(err);
      }
    }

    updateData(u_id as string); //invoking updateData
  };

  const handleEmpty = (u_id: number | string) => {
    async function emptyProductArray() {
      try {
        let res = await fetch(`${cartUrl}/${u_id}`, {
          method: "PATCH",
          body: JSON.stringify({
            products: [],
            totalAmount: 0,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.ok) setToggle(!toggle);
      } catch (error) {
        console.error(error);
      }
    }
    emptyProductArray();
  };

  const handleCheckout = () => {
    // Redirect the user to the UserDetails page
    navigate("/cart-payment");
  };
  return (
    <>
      {isLoading ? (
        <Center height="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.400"
            size="xl"
          />
        </Center> // Show loading message while fetching data fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      ) : (
        <Center>
          <Box w={{ base: "90%", md: "80%", lg: "65%" }}>
            {cartProduct &&
            cartProduct.products &&
            cartProduct.products.length > 0 ? (
              <Box w="100%" p="8px">
                <Box
                  mb="20px"
                  bg="rgb(250, 251, 250)"
                  borderRadius="10px"
                  p="18px"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Heading as="h2" fontFamily="revert">
                    Cart Items
                  </Heading>
                  <Button
                    fontFamily="revert"
                    colorScheme="red"
                    onClick={() => {
                      handleEmpty(cartProduct.id);
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>Empty Cart </span>
                    <BsFillBagDashFill />
                  </Button>
                </Box>

                <Box
                  boxShadow="lg"
                  p="20px"
                  display={{ sm: "block", lg: "flex" }}
                  bg="rgb(250, 251, 250)"
                  borderRadius="10px"
                >
                  <Box
                    overflowY="scroll" // Enable vertical scrollbar
                    overflowX="hidden" // Disable horizontal scrollbar
                    h="80vh"
                    paddingRight="10px"
                    padding="15px"
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#C0C0C0",
                        borderRadius: "4px",
                        height: "20px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                      },
                    }}
                    w={{ base: "100%", md: "100%", lg: "100%" }}
                  >
                    {cartProduct.products.map((product) => (
                      <CartCard
                        key={product.id}
                        product={product}
                        handleIncOrDec={handleIncOrDec}
                      />
                    ))}
                  </Box>
                </Box>
                <Center>
                  <Box
                    mt="40px"
                    mb="40px"
                    borderRadius="20px"
                    boxShadow="2xl"
                    display="flex"
                    p="20px"
                    flexDirection="column"
                    h="200px"
                    w="480px"
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Box display="flex" justifyContent="space-between" w="100%">
                      <Heading fontSize="12px" as="h6">
                        Sub Total
                      </Heading>
                      <Heading fontSize="12px" as="h6">
                        {" "}
                        {cartProduct.totalAmount}
                      </Heading>
                    </Box>
                    <Box display="flex" justifyContent="space-between" w="100%">
                      <Text fontSize="15px">Discount</Text>
                      <Text fontSize="15px">0%</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between" w="100%">
                      <Text>Delivery Charge</Text>
                      <Text>0</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between" w="100%">
                      <Heading fontSize="15px" as="h5">
                        Total
                      </Heading>
                      <Heading fontSize="15px" as="h6">
                        {cartProduct.totalAmount}
                      </Heading>
                    </Box>
                    <Box mt="20px">
                      <Button bg="blue.200" onClick={handleCheckout}>
                        Proceed to Checkout
                      </Button>
                    </Box>
                  </Box>
                </Center>
              </Box>
            ) : (
              <Box
                width="100%"
                height="80vh"
                alignItems="center"
                display="flex"
                flexDirection="column"
                textAlign="center"
                justifyContent="center"
              >
                <Box>
                  <BsFillBagHeartFill
                    style={{ fontSize: "8em", color: "rgb(126, 146, 255)" }}
                  />
                </Box>
                <Box marginTop="20px">
                  <Heading>Hey! Your Shopping Cart is Empty.</Heading>
                  <Text>
                    There is nothing in your cart. Please add some items.
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
        </Center>
      )}
      <Footer/>
    </>
  );
}

export default CartList;
