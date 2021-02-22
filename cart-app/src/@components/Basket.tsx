import IBasketItem from '@model/IBasketItem';
import ISpecialOfferItem from '@model/ISpecialOfferItem';
import React from 'react';
import BasketItem from './BasketItem';
import { H4 } from './lib/typography';
import { getSavingsAmount, getTotalCost } from '@utils';

const Basket = ({
  products,
  subTotal,
  specialOffers,
  increaseQuantity,
  decreaseQuantity,
}: {
  products: IBasketItem[];
  subTotal: number;
  specialOffers: ISpecialOfferItem[];
  increaseQuantity: (basketItem: IBasketItem) => void;
  decreaseQuantity: (basketItem: IBasketItem) => void;
}): JSX.Element => {
  return (
    <div className="p-2">
      <H4>Basket</H4>
      <hr />
      <ul>
        {products.map((product) => (
          <BasketItem
            key={product.id}
            basketItem={product}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            savingAmount={
              specialOffers.find((i) => i.id === product.id)?.savingAmount ?? 0
            }
          />
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-1xl">Sub Total: </span>
        <span className="ml-4 p-2 w-15 text-right text-blue rounded-md">
          {`£ ${(subTotal / 100).toFixed(2)}`}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-1xl">Savings: </span>
        <span className="ml-4 p-2 w-15 text-right text-blue rounded-md">
          {`£ ${(getSavingsAmount(specialOffers) / 100).toFixed(2)}`}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-1xl">Total Amount: </span>
        <span className="ml-4 p-2 w-15 text-right text-blue rounded-md">
          {`£ ${(getTotalCost(specialOffers, subTotal) / 100).toFixed(2)}`}
        </span>
      </div>
    </div>
  );
};

export default Basket;
