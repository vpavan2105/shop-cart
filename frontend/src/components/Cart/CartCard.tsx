import { ReactElement } from "react";
import { ProductDetails, IncDec } from "./CartList";
import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";

type CartCartProps = {
  product: ProductDetails;
  handleIncOrDec: (p_id: number, val: number) => void;
};

function CartCard({ product, handleIncOrDec }: CartCartProps): ReactElement {
  const { image, title, price, id, quantity } = product;
  return (
    <Box
      maxW={{ base: "80%", md: "85%", lg: "100%" }}
      p="6"
      boxShadow="Outline"
      // border="1px solid gray"
      bg="white"
      borderRadius="lg"
      display="flex"
      justifyContent={{
        base: "center",
        md: "space-around",
        lg: "space-around",
      }}
      alignContent={{ base: "space-around", md: "center" }}
      flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      mb="4"
      position="relative"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
    >
      <Box width="150px" h="150px">
        <Image w="100%" h="100%" src={image} alt={title} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          base: "center",
          md: "space-around",
          lg: "space-around",
        }}
      >
        <Heading fontSize="15px" as="h6">
          {title.length > 20 ? `${title.slice(0, 20)}...` : title}
        </Heading>
        <Text>Price: ${price}</Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100px"
      >
        <Button
          onClick={() => {
            handleIncOrDec(id, IncDec.dec);
          }}
          variant="outline"
          border="1px solid blue"
          size="xs"
        >
          -
        </Button>
        <Box
          borderRadius="50%"
          w="30px"
          h="30px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid blue"
        >
          {quantity}
        </Box>
        <Button
          onClick={() => {
            handleIncOrDec(id, IncDec.inc);
          }}
          variant="outline"
          border="1px solid blue"
          size="xs"
        >
          +
        </Button>
      </Box>
    </Box>
  );
}

export default CartCard;
