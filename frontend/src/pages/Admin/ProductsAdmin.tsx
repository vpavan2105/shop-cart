import { ReactElement, useEffect, useRef, useState } from "react";
import { ProductInput } from "../../components/Admin/ProductInput";
import { ProductList } from "../../components/Admin/ProductList";
import { Box, Button,Text, Divider, Heading, Input, Select } from "@chakra-ui/react";
import { useAppDispatch } from "../../redux/utils/Product_Utils";
import { fetchDataProduct, filterProducts, filtercategoryProducts } from "../../redux/actions/actionAdmin";

const ProductsAdmin = ():ReactElement => {
  const dispatch = useAppDispatch();
  const [title,setTitle] = useState<string>("");
  const id = useRef<null|number>(null);
  useEffect(()=>{
     dispatch(fetchDataProduct())
   },[])
   const fetchFilterProduct = (value:string) => {
    console.log(value);
    dispatch(filterProducts(value));

  }
  const handleCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value == "All") {
      dispatch(fetchDataProduct())
      return;
    }
    
       dispatch(filtercategoryProducts(e.target.value));
  }
   const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if(id.current ){
  
      clearInterval(id.current);
      id.current = null;
    }
     id.current = setTimeout(()=>{
      fetchFilterProduct(title);
      },1500)
      
  }
  
  return (
    <Box p={4}>
    <Heading textAlign={'center'} color={'teal.500'} m={5}>Products</Heading>
    
    <ProductInput />
    <Divider my={4} />

    <Box mb={4} display={'flex'} gap={3} padding={3}>
     <Input  type='search' height={'50px'} placeholder="Search for Item.." value={title} onChange={handleSearch}/>
    <Select onChange={handleCategoryChange} height={'50px'}  >
      <option value="All">----Filter By Category----</option>
      <option>men's clothing</option>
      <option>kitchen</option>
      <option>storage device</option>
      <option>head phones</option>
      <option>laptops</option>
      <option>smart watch</option>
      <option>Monitor</option>
      <option>women's clothing</option>
      <option>fragrances</option>
      <option>skincare</option>
    </Select>
      </Box>
    <ProductList />
  </Box>
  )
}

export default ProductsAdmin
