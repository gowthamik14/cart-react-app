import React from 'react';
import IProduct from '@model/IProduct';
import IBasketItem from '@model/IBasketItem';

interface BasketItemProp extends IProduct {
  quantity: number,
  increaseQuantity: (basketItem: IBasketItem) => void
  decreaseQuantity:(basketItem: IBasketItem) => void
}

const BasketItem: React.FC<BasketItemProp> = ({ id, name, price,quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <li
      className="flex justify-between items-center list-decimal list-inside border-b-2 border-gray-100	p-2"
      key={id}
    >
      <span>{name}</span>
      <div>
        <span className="text-gray-400 pr-1">£</span>
        <span>{(price / 100).toFixed(2)}</span>
        <span>
        <button
          className="ml-4 p-2 bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2"  
          onClick={() => increaseQuantity({id,name,price,quantity})}     
        >
         +
         </button>
          <span className="ml-4 p-2 w-10 text-center text-blue rounded-md"> {quantity}</span>
          <button className="ml-4 p-2  bg-white-400 text-blue rounded-md border-2 border-blue-400 focus:outline-blue focus:ring-2 ring-blue-200 ring-offset-2"
          onClick={() => decreaseQuantity({id,name,price,quantity})} >-</button>
        </span>
      </div>
    </li>
  );
};
export default BasketItem;
