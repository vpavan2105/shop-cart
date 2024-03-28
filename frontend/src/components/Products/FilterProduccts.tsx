import React, { useEffect, useState } from "react";
import { Product } from "./ProductList";
import axios from "axios";
import { Box, List, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { CardSkeleton } from "./Skeleton";

interface FilteredProductsProps {
  category: string;
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get<Product[]>(`url?category=${category}`);
        setFilteredProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <Box>
      <Text fontSize="xl" mb="4">
        Filtered Products
      </Text>
      <List spacing={3}>
        {filteredProducts.length > 0 ? (
          <List spacing={3}>
            {filteredProducts.map((prod) => ()
              // <ProductCard key={prod.id} prod={prod} />
            )}
          </List>
        ) : (
          <CardSkeleton />
        )}
      </List>
    </Box>
  );
};

export default FilteredProducts;
