import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { SubCategories } from "./SubCategories";

interface Props {
  children: React.ReactNode;
  onclick ?: () => void;
}

export const Links = [
  "Fashion",
  "Electronics",
  "Furniture",
  "Home & Kitchen",
  "Luggage & Bags",
];

export const Fashion = ["Men-clothing", "Women-clothing", "Jewelry", "Fragrances", "Shoes"];
export const Electronics = ["Mobiles", "Laptops", "Storage"];

export const NavLink = ({children, onclick}: Props) => {

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

export function ProductNav(): ReactElement {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  // Function to handle mouse
  const handleMouseEnter = (category: string) => {
    setIsHovered(category);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  // Function for subcategories
  // const SubCategories = useCallback((category: string) => {
  //   if (category === "Fashion") {
  //     return (
  //       <Card mb="10px" position="absolute" top="87px" zIndex="1" p={2}>
  //         {Fashion.map((link) => (
  //           <NavLink key={link}>{link}</NavLink>
  //         ))}
  //       </Card>
  //     );
  //   } else if (category === "Electronics") {
  //     return (
  //       <Card mb="10px" position="absolute" top="87px" zIndex="1" p={2}>
  //         {Electronics.map((link) => (
  //           <NavLink key={link}>{link}</NavLink>
  //         ))}
  //       </Card>
  //     );
  //   }
  //   return null;
  // }, []);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "flex" }}>
              {Links.map((link) => (
                <Box
                  key={link}
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink>{link}</NavLink>
                  {isHovered === link && <SubCategories category={link} />}
                </Box>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
