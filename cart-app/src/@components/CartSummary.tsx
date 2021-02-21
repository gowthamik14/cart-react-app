import IBasketItem from '@model/IBasketItem';
import IProduct from '@model/IProduct';
import ISpecialOfferItem from '@model/ISpecialOfferItem';
import React from 'react';
import { H4 } from './lib/typography';

const Basket = ({
  products,
  totalCost,
  specialOffers
}: {
  products: IBasketItem[];
  totalCost: string;
  specialOffers:ISpecialOfferItem[]
}): JSX.Element => {
  return (
    <div className="p-2">
     <H4>Cart Summary</H4>
        <hr />
        <ul>
        <li>
        <div className="flex justify-between items-center"> 
        <span className="text-1xl">Sub Total: </span>
        <span className="ml-4 p-2 w-15 text-right text-blue rounded-md"> {totalCost}</span>
        </div>
        </li>
        <li>
        <span className="text-2xl">Special Offers </span>
        {
          specialOffers.filter(i=> i.savingAmount !== undefined && i.savingAmount !== 0).map((item : ISpecialOfferItem) => {
            return (
              <li
                className="flex justify-between items-center list-decimal list-inside border-b-2 border-gray-100	p-2"
                key={item.id}
              >
                <span>{item.name}</span>
                <div>
                  <span className="text-gray-400 pr-1">£</span>
                  <span>{(item.savingAmount/100).toFixed(2)}</span>
                 </div>
              </li>
            )          
          })
        }
        </li>
        </ul>
        </div>
  );
};

export default Basket;
