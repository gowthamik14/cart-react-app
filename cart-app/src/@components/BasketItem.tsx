import React from 'react';
import IBasketItem from '@model/IBasketItem';
import Quantity from './Quantity';
import BasketItemCost from './BasketItemCost';

interface BasketItemProp {
  basketItem: IBasketItem;
  savingAmount: number;
  increaseQuantity: (basketItem: IBasketItem) => void;
  decreaseQuantity: (basketItem: IBasketItem) => void;
}

const BasketItem: React.FC<BasketItemProp> = ({
  basketItem,
  savingAmount,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <li
      className="flex flex-col list-decimal list-inside border-b-2 border-gray-100	p-2"
      key={basketItem.id}
    >
      <div className="flex justify-between items-center">
        <span className="text-lg">{basketItem.name}</span>
        <div>
          <span className="text-gray-400 pr-1">£</span>
          <span className="text-lg">{(basketItem.price / 100).toFixed(2)}</span>
        </div>
        <Quantity
          item={basketItem}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
      <div>
        <BasketItemCost
          price={basketItem.price}
          quantity={basketItem.quantity}
          savingAmount={savingAmount}
        />
      </div>
    </li>
  );
};
export default BasketItem;
