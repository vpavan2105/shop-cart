import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, List, Text } from "@chakra-ui/react";
// import { ProductCard } from "./ProductCard";
import { CardSkeleton } from "./Skeleton";
import { Product, ProductCard } from "./ProductCard";
import { url } from "../../redux/actions/actions";

interface FilteredProductsProps {
  category: string;
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({
  category,
}: FilteredProductsProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading((prev) => !prev);
        let res = await axios.get<Product[]>(`${url}?category=${category}`);
        setFilteredProducts(res.data);
        console.log(res.data);
        setLoading((prev) => !prev);
        console.log(loading);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  return (
    <Box>
      <Text fontSize="xl" mb="4">
        Filtered Products
      </Text>
      {loading ? (
        <CardSkeleton />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : (
        <Box>
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                prod={prod}
                truncateDescription={() => ""}
                truncateTitle={() => ""}
              />
            ))
          ) : (
            <Text>No products found</Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FilteredProducts;
