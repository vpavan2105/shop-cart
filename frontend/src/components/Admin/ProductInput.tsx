import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { ProdData, useAppDispatch } from "../../utils/Admin/adminUtils";
import { addDataProduct } from "../../redux/action";


const initialState:ProdData = {
  title: "",
  description: "",
  price: 0,
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

const ProductInput = () => {
  const [updateProduct, setUpdateProduct] = useState<ProdData>(initialState);
  const dispatch = useAppDispatch()
  const addProduct = () => {
    dispatch(addDataProduct(updateProduct));

    setUpdateProduct(initialState);
  };
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setUpdateProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value,
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
    <Input
      type="number"
      name="count"
      placeholder="Enter count"
      value={updateProduct.rating?.count}
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
