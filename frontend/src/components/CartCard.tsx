import { ReactElement } from "react";
import { ProductDetails, IncDec } from "./CartList";
import { Box } from "@chakra-ui/react";

type CartCartProps = {
  product: ProductDetails;
  handleIncOrDec: (p_id: number, val: number) => void;
};

function CartCard({ product, handleIncOrDec }: CartCartProps): ReactElement {
  const { image, title, price, description, id, quantity } = product;
  return (
    <Box w={{ base: "100%", md: "75%", lg: "60%" }} bg="tomato">
      <img width="200px" src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price:{price}</p>
      <p>{description}</p>
      <div>
        <button
          onClick={() => {
            handleIncOrDec(id, IncDec.dec);
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            handleIncOrDec(id, IncDec.inc);
          }}
        >
          +
        </button>
      </div>
    </Box>
  );
}

export default CartCard;
