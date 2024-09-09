import React, { useMemo } from "react";
import CartItem from "./cartItem";
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, deleteFromCart }) => {
  const calculateTotal = useMemo(
    () => (items: CartItemType[]) =>
      items.reduce((ack: number, item) => ack + item.amount * item.price, 0),
    []
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Number</th>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-center">Quantity</th>
              <th className="p-2 text-right">Price</th>
              <th className="p-2 text-right">total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              
              />
            ))}
          </tbody>
        </table>
      )}
      <h2 className="text-xl font-bold mt-4">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  );
};

export default React.memo(Cart);