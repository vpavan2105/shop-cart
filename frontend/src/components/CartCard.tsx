import { ReactElement } from "react";
import { Product, IncDec } from "./CartList";
import {Box} from "@chakra-ui/react";

type CartCartProps = {
  product: Product;
  handleIncOrDec: (p_id: number, val: number) => void;
};

function CartCard({ product, handleIncOrDec }: CartCartProps): ReactElement {
  return (
    <Box w={{ base: "100%", md: "75%", lg:"60%"} } bg='tomato'>
      <img width="200px" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price:{product.price}</p>
      <p>{product.description}</p>
      <div>
        <button
          onClick={() => {
            handleIncOrDec(product.id, IncDec.dec);
          }}
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={() => {
            handleIncOrDec(product.id, IncDec.inc);
          }}
        >
          +
        </button>
      </div>
    </Box>
  );
}

export default CartCard;
