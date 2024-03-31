import { ReactElement } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { ProdData } from "../../redux/utils/adminUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps{
   product:ProdData;
   editProduct:(a:ProdData) => void;
   deleteProduct: (a:any) => void;

}
const ProductCard:React.FC<ProductCardProps> = ({ product, editProduct, deleteProduct }):ReactElement => {

console.log(product);

  return (
    <Box className="product-card" p={4} borderWidth="1px" borderRadius="md" shadow="md">
     <Text fontSize="xl" fontWeight="bold" mb={2} noOfLines={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
        {product.title}
      </Text>
      <Box mt={4} position="relative" w="100%" h="200px" overflow="hidden">
        <Image src={product.image} alt={product.title} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" maxW="100%" maxH="100%" />
      </Box>
      <Text mt={2}>{product.category}</Text>
      <Text mt={2}>${product.price}</Text>
      <Text mt={2}>Rating: {product.rating.rate} </Text>
      <Button onClick={() => editProduct(product)} leftIcon={<FontAwesomeIcon icon={faEdit} />}>
        Edit
      </Button>
      <Button onClick={() => deleteProduct(product.id)} ml={2} leftIcon={<FontAwesomeIcon icon={faTrash} />}>
        Delete
      </Button>
    </Box>
  );
};

export  {ProductCard};
