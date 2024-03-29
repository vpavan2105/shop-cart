import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { ProductCard } from "./ProductCard";
import { CardSkeleton } from "./Skeleton";
import { fetchProducts } from "../../redux/actions/actions";
import { Product, useAppDispatch, useAppSelector } from "../../redux/utils/Product_Utils";
import { RootState } from "../../redux/store";

const MAX_DESCRIPTION_LENGTH: number = 40;
const MAX_TITLE_LENGTH: number = 30;
const PER_PAGE: number = 10;

const ProductList: React.FC = () => {
  const products = useAppSelector((state: RootState) => state.product.products);
  const loading = useAppSelector((state: RootState) => state.product.loading);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  console.log(loading);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  const truncateDescription = (description: string): string => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
    }
    return description;
  };

  const truncateTitle = (title: string): string => {
    if (title.length > MAX_TITLE_LENGTH) {
      return title.slice(0, MAX_TITLE_LENGTH) + "...";
    }
    return title;
  };

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const indexOfLastProduct = page * PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Heading>Product page</Heading>
      <Flex mt="4" justifyContent="center">
        <Text fontSize="20px" p={1} fontWeight="bold">Pages : </Text>
        {Array.from(
          { length: Math.ceil(products.length / PER_PAGE) },
          (_, index) => (
            <Button
              key={index}
              mr="2"
              colorScheme={page === index + 1 ? "yellow" : "gray"}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          )
        )}
      </Flex>
      {loading ? (
        <Stack direction={["row"]} flexWrap="wrap" spacing="24px">
          {[...Array(12)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </Stack>
      ) : (
        <Stack direction={["row"]} flexWrap="wrap" spacing="24px">
          {currentProducts.map((prod: Product) => (
            <ProductCard
              key={prod.id}
              prod={prod}
              truncateDescription={truncateDescription}
              truncateTitle={truncateTitle}
            />
          ))}
        </Stack>
      )}
    </>
  );
};

export default ProductList;
