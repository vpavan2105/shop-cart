import React, {useEffect, useState} from "react";
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

import {Product} from "../../redux/utils/Product_Utils";
import {useParams} from "react-router";
import axios from "axios";
import {ProductUrl} from "../../ApiUrls.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faCartShopping} from "@fortawesome/free-solid-svg-icons";

interface SingleProductPageProps {
}

const SingleProductPage: React.FC<SingleProductPageProps> = () => {
    // const [cartItems, setCartItems] = useState<Product[]>([]);
    const {id} = useParams<{ id: string | undefined }>();
    const [product, setProduct] = useState<Product | null>(null);
    // const dispatch = useAppDispatch();
    const toast = useToast();

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
                    direction={{base: "column", md: "row"}}
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        height={{base: "300px", md: "400px"}}
                        width={{base: "100%", md: "auto"}}
                    />
                    <Card width={{base: "100%", md: "50%"}} p={4} mt={{base: 4, md: 0}}>
                        <Flex direction="column" alignItems="center" p={4}>
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
