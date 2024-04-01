import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Box, Flex, Image, Text, Spinner } from "@chakra-ui/react";
import { ProdData } from "../../redux/utils/adminUtils";
import { OrderUrl } from "../../ApiUrls";

const SingleOrderPage = () => {
    const [singleOrder, setSingleOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchSingleOrder(id);
    }, [id]);

    const fetchSingleOrder = (id:string|undefined) => {
        setIsLoading(true);
        axios.get(`${OrderUrl}/${id}`)
            .then(res => {
                setIsLoading(false);
                setSingleOrder(res.data);
            })
            .catch(error => {
                console.error("Error fetching single order:", error);
            });
    };

    if (isLoading) return <Spinner size="lg" />;

    return (
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" mb={4}>Order</Text>
            {singleOrder.allProducts && singleOrder.allProducts.map((product, index) => (
                <CartItem key={index} product={product} />
            ))}
            <Box mt={4} textAlign="right">
                <Text fontSize="lg" fontWeight="bold">Total: ${singleOrder.totalAmount}</Text>
            </Box>
        </Box>
    );
};

export  {SingleOrderPage};

const CartItem = ({ product }:{product:ProdData}) => {
    return (
        <Flex mb={4}>
            <Image src={product.image} alt={product.title} boxSize={{ base: "100px", md: "150px" }} />
            <Box ml={{ base: 4, md: 8 }}>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">{product.title}</Text>
                <Text fontSize={{ base: "md", md: "lg" }} mt={2}>Price: ${product.price}</Text>
                <Text fontSize={{ base: "sm", md: "md" }} mt={2}>{product.description}</Text>
            </Box>
        </Flex>
    );
};
