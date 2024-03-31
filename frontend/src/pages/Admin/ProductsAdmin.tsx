import { ReactElement, useEffect } from "react";
import { ProductInput } from "../../components/Admin/ProductInput";
import { ProductList } from "../../components/Admin/ProductList";
import { Box, Divider } from "@chakra-ui/react";
import { useAppDispatch } from "../../redux/utils/Product_Utils";
import { fetchDataProduct } from "../../redux/actions/actionAdmin";

const ProductsAdmin = ():ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
     dispatch(fetchDataProduct())
   },[])
  return (
    <Box p={4}>
    <ProductInput />
    <Divider my={4} />
    <ProductList />
  </Box>
  )
}

export default ProductsAdmin
