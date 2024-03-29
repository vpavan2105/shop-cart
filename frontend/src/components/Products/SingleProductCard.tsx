import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { RootState } from "../../redux/store";
import { Product, useAppDispatch } from "../../redux/utils/Product_Utils";

interface SingleProductPageProps {
  product: Product;
}

const SingleProductPage: React.FC<SingleProductPageProps> = ({
  product,
}: SingleProductPageProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  // const isAuth = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const handleBuy = () => {
    setTimeout(() => {
      console.log("Moved to payment page");
    }, 500);
  };

  const handleCart = () => {
    if (false) {
      setCartItems([...cartItems, product]);
      dispatch(addToCart(product));
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
      });
    }
  };

  return (
    <Box p={4}>
      <Flex direction="column" alignItems="center">
        <Image src={product.image} alt={product.title} />
        <Heading mt={4}>{product.title}</Heading>
        <Text fontSize="lg" mt={2}>
          {product.description}
        </Text>
        <Text fontSize="lg" mt={2}>
          Price: &#8377;{product.price}
        </Text>
        <Text fontSize="lg" mt={2}>
          Category: {product.category}
        </Text>
        <Text fontSize="lg" mt={2}>
          Rating: {product.rating.rate}
        </Text>
        <Flex mt={4}>
          <Button colorScheme="orange" mr={2} onClick={handleCart}>
            Add to Cart
          </Button>
          <Button colorScheme="yellow" onClick={handleBuy}>
            Buy Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleProductPage;
