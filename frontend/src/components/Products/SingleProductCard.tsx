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

import { url } from "../../redux/actions/actions";
import { Product } from "../../redux/utils/Product_Utils";
import { useParams } from "react-router";
import axios from "axios";

interface SingleProductPageProps {}

const SingleProductPage: React.FC<SingleProductPageProps> = () => {
  // const [cartItems, setCartItems] = useState<Product[]>([]);
  const { id } = useParams<{ id: string | undefined }>();
  const [product, setProduct] = useState<Product | null>(null);
  // const dispatch = useAppDispatch();
  const toast = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        const productData: Product = response.data;
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
    toast({
      title: "Unable to Add",
      description: "You are not logged in yet.",
      status: "error",
      duration: 900,
      isClosable: true,
      position: "top",
    });
  };

  return (
      <Box p={4}>
        {product && (
            <Flex
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
            >
              <Image
                  src={product.image}
                  alt={product.title}
                  height={{ base: "300px", md: "400px" }}
                  width={{ base: "100%", md: "auto" }}
              />
              <Card width={{ base: "100%", md: "50%" }} p={4} mt={{ base: 4, md: 0 }}>
                <Flex direction="column">
                  <Heading mt={4}>{product.title}</Heading>
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
                  <Flex mt={4} justifyContent="center">
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
