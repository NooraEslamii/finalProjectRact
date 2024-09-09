import React from 'react';
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <h3 className="text-xl font-bold mb-4">${item.price.toFixed(2)}</h3>
    </div>
    <button 
      onClick={() => handleAddToCart(item)}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Add to cart
    </button>
  </div>
);

export default Item;