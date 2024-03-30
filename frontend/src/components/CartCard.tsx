import { ReactElement, useEffect, useState } from "react";
import { FcEmptyTrash} from "react-icons/fc";

interface Product {
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

interface CartData {
  id: string;
  user_id: string;
  products: Product[];
  totalAmount:number
}
enum IncDec{
  inc,
  dec
}
function CartCard(): ReactElement {
  const [cartProduct, setCartProduct] = useState<CartData | null>(null);
  // const u_id=localStorage.getItem()
  
  // getting cart data from server
  useEffect(() => {
    fetch("http://localhost:3001/carts/3")
      .then((res) => res.json())
      .then((data: CartData) => {
        setCartProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cartProduct]);

  //Handling each product increment and decrement
  const handleIncOrDec = (p_id: number,val:number) => {
   
    async function updateData(cart_id: string) {
      try {
        // Get all cart details of an user using cartId
        let res = await fetch(`http://localhost:3001/carts/${cart_id}`);
        let data: CartData = await res.json();

        let productsArray = data.products;

        // Increasing product quantity for a partcular product in the cart
        if(val===1)
        {
          productsArray.forEach(product => {
            if(product.id === p_id) {
              product.quantity += 1;
            }
          });
        }
        // Decreasing product quantity for a partcular product in the cart
        else{
          productsArray.forEach(product => {
            if(product.id === p_id) {
              product.quantity -= 1;
            }
          });
        }
        //If the quantity will be zero then that product will be removed from the array
        productsArray = productsArray.filter(product => product.quantity > 0);


    // Recalculate totalAmount after changing product quantity
    let newTotalAmount = productsArray.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    newTotalAmount=parseFloat(newTotalAmount.toFixed(2)); //rounding to 2 decimal places
        // Update cart details of the user using cart_id
        await fetch(`http://localhost:3001/carts/${cart_id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            products:productsArray,
            totalAmount:newTotalAmount
          }),
          headers: {
            "Content-type": "application/json"
          }
        });
      }
      catch (err) {
        console.error(err);
      }
    }

    updateData("3"); //invoking updateData
  };

  const handleEmpty=(cart_id:number|string)=>{
   
    async function emptyProductArray() {
      try{
        await fetch(`http://localhost:3001/carts/${cart_id}`, {
          method: 'PUT',
          body: JSON.stringify({
            products:[]
          }),
          headers: {
            "Content-type": "application/json"
          }
        });
      }
      catch(error)
      {
        console.error(error);
      }
      
    }
    emptyProductArray();
    
  }
  return (
    <>
      <div>
        {cartProduct && (
          <div>
            <h2>Products in Cart:</h2>
            {cartProduct.products.map((product) => (
             
              <div key={product.id}>
                <img width="200px" src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Price:{product.price}</p>
                <p>{product.description}</p>
                <div>
                  <button
                    onClick={() => {
                      handleIncOrDec(product.id,IncDec.inc);
                    }}
                  >-</button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => {
                      handleIncOrDec(product.id,IncDec.dec);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <h2>Total : {cartProduct?.totalAmount}</h2>
      {cartProduct && <FcEmptyTrash onClick={()=>{handleEmpty(cartProduct.id)}}/>}
      
      <button>Proceed to Checkout</button>
    </>
  );
}

export default CartCard;
