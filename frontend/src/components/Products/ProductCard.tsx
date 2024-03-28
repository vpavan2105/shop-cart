import { ReactElement, useState } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Product } from "./ProductList";

export interface ProductCardProp {
  prod: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
      rate: number;
    };
  };
  truncateDescription: (description: string) => string;
  truncateTitle: (title: string) => string;
}

export function ProductCard({
  prod,
  truncateDescription,
  truncateTitle,
}: ProductCardProp): ReactElement {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const toast = useToast();

  function handleBuy() {
    setTimeout(() => {
      console.log("moved to payment page");
    }, 500);
  }

  function handleCart() {
    setCartItems([...cartItems, prod]);
    console.log("product added to cart");
    toast({
      title: " Succefully Added",
      description: "You added one product to cart.",
      status: "success",
      duration: 700,
      isClosable: true,
      position: "top",
    });
  }

  return (
    <Box
      width={{ base: "100%", sm: "43%", md: "47%", lg: "31%" }}
      padding="10px"
      marginBottom="10px"
    >
      <Card p={3} height="100%">
        <Flex direction={['column']} height='40%'>
          <Image src={prod.image} height="100px" objectFit="contain" />
          <Box p={2}>
            <Center>
              <Heading fontSize={{ base: "sm", sm: "md", md: "lg" }}>
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
}
