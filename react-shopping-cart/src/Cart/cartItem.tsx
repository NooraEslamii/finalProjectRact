import React from "react";
import { CartItemType } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <tr className="border-b bg-white">
    <td className="p-2 text-left">{item.id}</td>
    <td className="p-2 text-left">{item.title}</td>
    <td className="p-2 text-left">Description</td>
    <td className="p-2 text-center">
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white w-6 h-6 rounded-full hover:bg-red-600"
      >
        -
      </button>
      <span className="mx-2">{item.amount}</span>
      <button
        onClick={() => addToCart(item)}
        className="bg-green-500 text-white w-6 h-6 rounded-full hover:bg-green-600"
      >
        +
      </button>
    </td>
    <td className="p-2 text-right">${item.price.toFixed(2)}</td>
    <td className="p-2 text-right">${(item.amount * item.price).toFixed(2)}</td>
    <td className="p-2 text-center">
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => removeFromCart(item.id)}
      >
       <FontAwesomeIcon icon={faTrash} />
      </button>
    </td>
  </tr>
);

export default CartItem;