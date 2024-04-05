
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const WildcardComponent = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <FaExclamationCircle size={48} color="red" />
      <Text fontSize="xl" mt={4}>
        Oops! Page not found.
      </Text>
      <Button
        as={Link}
        to="/"
        colorScheme="teal"
        mt={4}
        size="sm"
        leftIcon={<FaExclamationCircle />}
      >
        Go Home
      </Button>
    </Flex>
  );
};

export default WildcardComponent;
