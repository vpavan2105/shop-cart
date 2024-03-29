import { ReactElement } from "react";
import { ProductInput } from "../../components/Admin/ProductInput";
import { ProductList } from "../../components/Admin/ProductList";
import { Box, Divider } from "@chakra-ui/react";

const ProductsAdmin = ():ReactElement => {
   
  return (
    <Box p={4}>
    <ProductInput />
    <Divider my={4} />
    <ProductList />
  </Box>
  )
}

export default ProductsAdmin
