import IBasketItem from '@model/IBasketItem';
import React from 'react';
import BasketItem from './BasketItem';
import { H4 } from './lib/typography';

const Basket = ({
  products,
  increaseQuantity, 
  decreaseQuantity
}: {
  products: IBasketItem[];
  increaseQuantity: (basketItem: IBasketItem) => void
  decreaseQuantity:(basketItem: IBasketItem) => void
}): JSX.Element => {
  return (
    <div className="p-2">
     <H4>Basket</H4>
        <hr />
      <ul>
        {products.map((product) => (
          <BasketItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity= {decreaseQuantity} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Basket;
