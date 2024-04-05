import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  useToast,
  Card,
} from "@chakra-ui/react";

import { Product } from "../../redux/utils/Product_Utils";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import {ProductUrl} from "../../ApiUrls.tsx";
import { CartUrl } from "../../ApiUrls.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface SingleProductPageProps {}

const SingleProductPage: React.FC<SingleProductPageProps> = () => {
  // const [cartItems, setCartItems] = useState<Product[]>([]);
  const { id } = useParams<{ id: string | undefined }>();
  const [product, setProduct] = useState<Product | null>(null);
  // const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();


  let userId: string | undefined; //ip

  const loginDetails = localStorage.getItem("isLoginLocal");
  if (loginDetails !== null) {
    const u_id = JSON.parse(loginDetails);
    const id = u_id.id;
    userId = id;
  }


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ProductUrl}/${id}`);
        const productData: Product = response.data;
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuy = () => {
    navigate(`/buy-payment/${id}`)
  };

    //Add to cart button functionality
    const handleCart = async () => {
      if (!userId) return navigate(`/login`);
      try {
        async function getCartData() {
          if (!product) {
            // Handle the case where product is null
            console.error("Product is null");
            toast({
              title: "Unable to Add",
              description: "Unexpected error: product not found ",
              status: "error",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
            return;
          }
          // Get the cart details for the user
          let res = await fetch(`${CartUrl}/${userId}`);
  
          // If no cart found for the user, create a brand new cart and add the product in it
          if (!res.ok) {
            await fetch(`${CartUrl}`, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                id: userId,
                totalAmount: product.price,
                user_id: userId,
                products: [
                  {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    rating: product.rating,
                    quantity: 1,
                  },
                ],
              }),
            });
  
            toast({
              title: "Product is added to the cart",
              description:
                "The selected product has been successfully added to your cart.",
              status: "success",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
            console.log(
              "A brand new cart is created for the user and the selected product is added to the cart"
            );
            return;
          }
  
          let data = await res.json();
  
          // Check if the product is already present in the cart
          const isProductAlreadyInCart = data.products.some(
            (item: Product) => item.id === product.id
          );
  
          if (isProductAlreadyInCart) {
            toast({
              title: "Unable to the Add Product",
              description:
                "Product is already in the cart. Please navigate to cart and increase quantity.",
              status: "warning",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
            return; // Exit function if product is already in cart
          }
  
          try {
            let res1 = await fetch(`${CartUrl}/${userId}`, {
              method: "PATCH",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                products: [
                  ...data.products,
                  {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    rating: product.rating,
                    quantity: 1,
                  },
                ],
                totalAmount: +parseFloat(data.totalAmount + product.price).toFixed(
                  2
                ),
              }),
            });
  
            if (res1.ok) {
              toast({
                title: "Product is added to the cart",
                description:
                  "The selected product has been successfully added to your cart.",
                status: "success",
                duration: 7000,
                isClosable: true,
                position: "top",
              });
            }
          } catch (err: any) {
            toast({
              title: "Unable to Add the Product",
              description: err.message,
              status: "error",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
          }
        }
  
        await getCartData();
      } catch (err: any) {
        toast({
          title: "Unable to Add the Product",
          description: err.message,
          status: "error",
          duration: 7000,
          isClosable: true,
          position: "top",
        });
      }
    };




  return (
      <Box p={4}>
        {product && (
            <Flex
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-around"
            >
              <Image
                  src={product.image}
                  alt={product.title}
                  height={{ base: "300px", md: "400px" }}
                  width={{ base: "60%", md: "auto" }}
              />
              <Card width={{ base: "100%", md: "50%" }} p={4} mt={{ base: 4, md: 0 }}>
                <Flex direction="column"  p={4}>
                  <Heading fontSize="xx-large" mt={4}>{product.title}</Heading>
                  <Text fontSize="lg" mt={2}>
                    {product.description}
                  </Text>
                  <Text fontSize="lg" mt={2} fontWeight="bold">
                    Price: &#36;{product.price}
                  </Text>
                  <Text fontSize="lg" mt={2}>
                    Category: {product.category}
                  </Text>
                  <Text fontSize="lg" mt={2}>
                    Rating: {product.rating.rate}
                  </Text>
                  <Flex
            p={2}
            direction={{ sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Button
              colorScheme="aliceblue"
              color = "black"
              bgColor={"yellow.500"}
              _hover={{bgColor : "yellow.600", color : "aliceblue"}}
              border = {"1px solid yellowgreen"}
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              onClick={handleCart}
            >
              <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B", marginRight : "5px"}} />  Add to Cart
            </Button>
            <Button
              colorScheme="aliceblue"
              color = "teal"
              _hover={{bgColor : "teal", color : "aliceblue"}}
              border = {"1px solid teal"}
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              onClick={handleBuy}
            >
              <FontAwesomeIcon icon={faBagShopping} style={{color: "#63E6BE", marginRight : "5px"}} /> Buy Now
            </Button>
          </Flex>
                </Flex>
              </Card>
            </Flex>
        )}
      </Box>
  );
};

export default SingleProductPage;
