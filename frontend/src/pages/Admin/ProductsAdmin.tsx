import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/Admin/adminUtils"
import { fetchDataProduct } from "../../redux/action";
import { RootState } from "../../redux/store";
import { ProductInput } from "../../components/Admin/ProductInput";
import { ProductList } from "../../components/Admin/ProductList";
import { Box, Divider } from "@chakra-ui/react";

const ProductsAdmin = ():ReactElement => {
   const dispatch = useAppDispatch();
   const data = useAppSelector((state:RootState)=>state.products.productsData)
   useEffect(()=>{
         dispatch(fetchDataProduct())
   },[])
   console.log(data);
   
  return (
    <Box p={4}>
    <ProductInput />
    <Divider my={4} />
    <ProductList />
  </Box>
  )
}

export default ProductsAdmin
