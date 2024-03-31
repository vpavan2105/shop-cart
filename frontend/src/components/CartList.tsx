import { ReactElement, useEffect, useState } from "react";
import { FcEmptyTrash } from "react-icons/fc";
import CartCard from "./CartCard";
import {CartUrl} from '../ApiUrls';
export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
  quantity: number;
}

export interface CartData {
  id: string;
  user_id: string;
  product: ProductDetails[];
  totalAmount: number;
}
export enum IncDec {
  inc = 1,
  dec = 0,
}
function CartList(): ReactElement {
  const [cartProduct, setCartProduct] = useState<CartData | null>(null);

  const cartUrl=CartUrl;
  const u_id = 5;
  // getting cart data from server
  useEffect(() => {
    fetch(`${cartUrl}/${u_id}`)
      .then((res) => res.json())
      .then((data: CartData) => {
        setCartProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cartProduct]);

  //Handling each product increment and decrement
  const handleIncOrDec = (p_id: number, val: number) => {
    
    async function updateData(u_id: number) {
      try {
        // Get all cart details of an user using cartId
        let res = await fetch(`${cartUrl}/${u_id}`);
        let data: CartData = await res.json();

        let productsArray = data.product;

        // Increasing product quantity for a partcular product in the cart
        if (val === 1) {
          productsArray.forEach((product) => {
            if (product.id === p_id) {
              product.quantity += 1;
            }
          });
        }
        // Decreasing product quantity for a partcular product in the cart
        else {
          productsArray.forEach((product) => {
            if (product.id === p_id) {
              product.quantity -= 1;
            }
          });

          //If the quantity will be zero then that product will be removed from the array
          productsArray = productsArray.filter(
            (product) => product.quantity > 0
          );
        }

        // Recalculate totalAmount after changing product quantity
        let newTotalAmount = productsArray.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
        newTotalAmount = parseFloat(newTotalAmount.toFixed(2)); //rounding to 2 decimal places
        // Update cart details of the user using u_id
        await fetch(`${cartUrl}/${u_id}`, {
          method: "PATCH",
          body: JSON.stringify({
            product: productsArray,
            totalAmount: newTotalAmount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
      } catch (err) {
        console.error(err);
      }
    }

    updateData(u_id); //invoking updateData
  };

  const handleEmpty = (u_id: number | string) => {
    async function emptyProductArray() {
      try {
        await fetch(`${cartUrl}/${u_id}`, {
          method: "PUT",
          body: JSON.stringify({
            products: [],
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
    emptyProductArray();
  };

  return (
    <>
      <div>
        {cartProduct && (
          <div>
            <h2>Products in Cart:</h2>
            {cartProduct.product.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                handleIncOrDec={handleIncOrDec}
              />
            ))}
          </div>
        )}
      </div>
      <h2>Total : {cartProduct?.totalAmount}</h2>
      {cartProduct && (
        <FcEmptyTrash
          onClick={() => {
            handleEmpty(cartProduct.id);
          }}
        />
      )}

      <button>Proceed to Checkout</button>
    </>
  );
}

export default CartList;
