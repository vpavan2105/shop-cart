import React, { useEffect, useState } from "react";
import { Box, Button, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import SubCategories from "./SubCategories";
import {useAppDispatch, useAppSelector} from "../../redux/utils/Product_Utils";
import {addToFilteredProducts, fetchProducts} from "../../redux/actions/actions";
import {RootState} from "../../redux/store.tsx";

interface ProductNavProps {}

interface Props {
  children: React.ReactNode;
  onclick?: () => void;
}

export const Links = [
  "Fashion",
  "electronics",
  "Furniture",
  "Home & Kitchen",
  "Luggage & Bags",
];

export const NavLink = ({ children, onclick }: Props) => {
  return (
    <Box
      as="a"
      p={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
        color: "yellow.500",
        fontWeight: "bold",
      }}
      onClick={onclick}
    >
      {children}
    </Box>
  );
};

const ProductNav: React.FC<ProductNavProps> = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const selectedCategory: any = useAppSelector(
      (state: RootState) => state.category
  );

  const handleMouseEnter = (category: string) => {
    setIsHovered(category);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleClick = () => {
    dispatch(addToFilteredProducts(selectedCategory))
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "flex" }}>
              {Links.map((category: string) => (
                <Box
                  key={category}
                  onMouseEnter={() => handleMouseEnter(category)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink onclick={() => handleClick}>{category}</NavLink>
                  {isHovered === category && (
                    <SubCategories category={category} />
                  )}
                </Box>
              ))}
              <Button onClick={() => dispatch(fetchProducts())}>All</Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default ProductNav;
