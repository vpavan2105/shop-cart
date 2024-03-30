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

import { addToCart, url } from "../../redux/actions/actions";
import { Product, useAppDispatch } from "../../redux/utils/Product_Utils";
import { useParams } from "react-router";
import axios from "axios";

// const getProductId = async(productId : string) => {
//   try {
//     const res = await axios.get(`${url}/${productId}`);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// }

interface SingleProductPageProps {
  // product: Product;
}

const SingleProductPage: React.FC<SingleProductPageProps> = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { id } = useParams<{ id: string | undefined }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();
  const toast = useToast();
  // const isAuth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        const productData: Product = response.data;
        console.log(response.data);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuy = () => {
    setTimeout(() => {
      console.log("Moved to payment page");
    }, 500);
  };

  const handleCart = () => {
    // if (false) {
    //   setCartItems([...cartItems, product]);
    //   dispatch(addToCart(product));
    //   console.log("product added to cart");
    //   toast({
    //     title: "Successfully Added",
    //     description: "You added one product to cart.",
    //     status: "success",
    //     duration: 700,
    //     isClosable: true,
    //     position: "top",
    //   });
    // } else {
    toast({
      title: "Unable to Add",
      description: "You are not loggedin yet.",
      status: "error",
      duration: 900,
      isClosable: true,
      position: "top",
    });
    // }
  };

  return (
    <Box p={4}>
      {product && (
        <Flex direction="row" alignItems="center" justifyContent="space-between">
          <Card>
            <Image
              src={product.image}
              alt={product.title}
              height="500px"
            />
          </Card>
          <Card width="50%">
            <Flex direction="column">
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
          </Card>
        </Flex>
      )}
    </Box>
  );
};

export default SingleProductPage;
