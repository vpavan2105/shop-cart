import React from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
// import { addToCart, url } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../redux/utils/Product_Utils";
import { useNavigate } from "react-router-dom";
import {CartUrl} from '../../ApiUrls';
import {CartData,ProductDetails} from '../CartList'
export interface ProductCardProps {
  prod: Product;
  truncateDescription: (description: string) => string;
  truncateTitle: (title: string) => string;
}






export const ProductCard: React.FC<ProductCardProps> = ({
  prod,
  truncateDescription,
  truncateTitle,
}: ProductCardProps) => {
  const [cartItems, setCartItems] = useState<ProductDetails[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const isAuth = useAppSelector((state:RootState) => state.auth);
  const toast = useToast();

  const userId = "5"; //ip
  const cartUrl = CartUrl;
  const handleBuy = () => {
    setTimeout(() => {
      console.log("moved to payment page");
    }, 500);
  };

  //Add to cart button functionality
  const handleCart = async () => {
    try {
      async function getCartData() {
        let res = await fetch(`${cartUrl}/${userId}`);

        if (!res.ok) {
          await fetch(`${cartUrl}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: userId,
              totalAmount: prod.price,
              user_id: userId,
              product: [
                {
                  id: prod.id,
                  title: prod.title,
                  price: prod.price,
                  description: prod.description,
                  category: prod.category,
                  image: prod.image,
                  rating: prod.rating,
                  quantity: 1,
                },
              ],
            }),
          });
          console.log("New cart created with add to cart product");
          return;
        }

        let data = await res.json();

        const isProductAlreadyInCart = data.product.some(
          (item: Product) => item.id === prod.id
        );

        if (isProductAlreadyInCart) {
          toast({
            title: "Unable to the Add Product",
            description:
              "Product is already in the cart. Please navigate to cart and increase quantity.",
            status: "warning",
            duration: 7000,
            isClosable: true,
            position: "top",
          });
          return; // Exit function if product is already in cart
        }

        try {
          let res1 = await fetch(`${cartUrl}/${userId}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              product: [
                ...data.product,
                {
                  id: prod.id,
                  title: prod.title,
                  price: prod.price,
                  description: prod.description,
                  category: prod.category,
                  image: prod.image,
                  rating: prod.rating,
                  quantity: 1,
                },
              ],
              totalAmount: +parseFloat(data.totalAmount + prod.price).toFixed(
                2
              ),
            }),
          });

          if (res1.ok) {
            toast({
              title: "Product is added to the cart",
              description:
                "The selected product has been successfully added to your cart.",
              status: "success",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
          }
        } catch (err: any) {
          toast({
            title: "Unable to Add the Product",
            description: err.message,
            status: "error",
            duration: 7000,
            isClosable: true,
            position: "top",
          });
        }
      }

      await getCartData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductClick = () => {
    console.log("clicked..");
    navigate(`/products/${prod.id}`);
  };

  return (
    <Box
      width={{ base: "100%", sm: "43%", md: "47%", lg: "31%" }}
      padding="10px"
      marginBottom="10px"
    >
      <Card p={3} height="100%">
        <Flex direction={["column"]} height="40%">
          <Image
            src={prod.image}
            height="100px"
            objectFit="contain"
            onClick={handleProductClick}
          />
          <Box p={2}>
            <Center>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                onClick={handleProductClick}
              >
                {truncateTitle(prod.title)}
              </Heading>
            </Center>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }} mt={2}>
              {truncateDescription(prod.description)}
            </Text>
            <Center mt={2}>
              {[...Array(4)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#FFD43B" }}
                />
              ))}
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#FFD43B" }}
              />
            </Center>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text mt={2}>
                {" "}
                <span>&#36; </span>
                {prod.price}
              </Text>
              <Text
                mt={{ base: 2, sm: 1 }}
                textAlign={{ base: "center", sm: "left" }}
              >
                Category: {prod.category}
              </Text>
              <Text
                mt={{ base: 2, sm: 0 }}
                textAlign={{ base: "center", sm: "right" }}
              >
                Rating: {prod.rating.rate}
              </Text>
            </Flex>
          </Box>
          <Divider />
          <Flex
            p={2}
            direction={{ sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Button
              colorScheme="orange"
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              onClick={handleCart}
            >
              Add to Cart
            </Button>
            <Button
              colorScheme="yellow"
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              onClick={handleBuy}
            >
              Buy Now
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};
