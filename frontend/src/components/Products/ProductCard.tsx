import React, { useState } from "react";
import { Box, Button, Card, Center, Divider, Flex, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { addToCart, url } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import SingleProductPage from "./SingleProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/utils/Product_Utils";
import { RootState } from "../../redux/store";


export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductCardProps {
  prod: Product;
  truncateDescription: (description: string) => string;
  truncateTitle: (title: string) => string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ prod, truncateDescription, truncateTitle }: ProductCardProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state:RootState) => state.auth);
  const toast = useToast();

  const handleBuy = () => {
    setTimeout(() => {
      console.log("moved to payment page");
    }, 500);
  };

  const handleCart = () => {
    if(isAuth){
      setCartItems([...cartItems, prod]);
      dispatch(addToCart(prod));
      console.log("product added to cart");
      toast({
        title: "Successfully Added",
        description: "You added one product to cart.",
        status: "success",
        duration: 700,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Unable to Add",
        description: "You are not loggedin yet.",
        status: "error",
        duration: 900,
        isClosable: true,
        position: "top",
      })
    }
  };

  const handleProductClick = () => {
    console.log("clicked..");
   return <SingleProductPage product={prod} />
  };

  return (
    <Box
      width={{ base: "100%", sm: "43%", md: "47%", lg: "31%" }}
      padding="10px"
      marginBottom="10px"
    >
      <Card p={3} height="100%">
        <Flex direction={['column']} height='40%'>
          <Image src={prod.image} height="100px" objectFit="contain" onClick={handleProductClick} />
          <Box p={2}>
            <Center>
              <Heading fontSize={{ base: "sm", sm: "md", md: "lg" }} onClick={handleProductClick}>
                {truncateTitle(prod.title)}
              </Heading>
            </Center>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }} mt={2}>
              {truncateDescription(prod.description)}
            </Text>
            <Center mt={2}>
              {[...Array(4)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#FFD43B" }}
                />
              ))}
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#FFD43B" }}
              />
            </Center>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text mt={2}>
                {" "}
                <span>&#8377; </span>
                {prod.price}
              </Text>
              <Text
                mt={{ base: 2, sm: 1 }}
                textAlign={{ base: "center", sm: "left" }}
              >
                Category: {prod.category}
              </Text>
              <Text
                mt={{ base: 2, sm: 0 }}
                textAlign={{ base: "center", sm: "right" }}
              >
                Rating: {prod.rating.rate}
              </Text>
            </Flex>
          </Box>
          <Divider />
          <Flex
            p={2}
            direction={{ sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Button
              colorScheme="orange"
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              onClick={handleCart}
            >
              Add to Cart
            </Button>
            <Button
              colorScheme="yellow"
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              onClick={handleBuy}
            >
              Buy Now
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};

