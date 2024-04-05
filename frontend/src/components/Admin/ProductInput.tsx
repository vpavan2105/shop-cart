import { Box, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { ProdData } from "../../redux/utils/adminUtils";
import { addDataProduct } from "../../redux/actions/actionAdmin";
import { useAppDispatch } from '../../redux/utils/Product_Utils';


const initialState:ProdData = {
  title: "",
  description: "",
  price: 0,
  category: "",
  image: "",
  rating: {
    rate: 0,
 
  },
};

const ProductInput = () => {
  const [updateProduct, setUpdateProduct] = useState<ProdData>(initialState);
  const toast = useToast();
  const dispatch = useAppDispatch()
  const addProduct = () => {
    dispatch(addDataProduct(updateProduct));
    toast({
      title: 'New Product.',
      description: `Successfully added ${updateProduct.title}`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    setUpdateProduct(initialState);
  };
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "rate") {
      setUpdateProduct((prev) => ({
        ...prev,
        rating: {
          [name]: value
        },
      }));
      console.log("update");
    } else {
      setUpdateProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <Box>
    <Input
      type="text"
      name="title"
      placeholder="Enter title"
      value={updateProduct.title}
      onChange={handleInputChange}
      mb={2}
    />
    <Input
      type="text"
      name="category"
      placeholder="Enter category"
      value={updateProduct.category}
      onChange={handleInputChange}
      mb={2}
    />
    <Input
      type="text"
      name="image"
      placeholder="Enter image URL"
      value={updateProduct.image}
      onChange={handleInputChange}
      mb={2}
    />
    <Input
      type="number"
      name="price"
      placeholder="Enter price"
      value={updateProduct.price}
      onChange={handleInputChange}
      mb={2}
    />
    <Input
      type="number"
      name="rate"
      placeholder="Enter rating"
      value={updateProduct.rating?.rate}
      onChange={handleInputChange}
      mb={2}
    />
    <Textarea
      name="description"
      placeholder="Enter description"
      value={updateProduct.description}
      onChange={handleInputChange}
      mb={2}
    />
    <Button onClick={addProduct} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
      Add Product
    </Button>
  </Box>

  );
};

export  {ProductInput}
