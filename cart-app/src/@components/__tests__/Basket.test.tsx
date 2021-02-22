import React from 'react';
import { render } from '@testing-library/react';
import Basket from '@components/Basket';
import ISpecialOfferItem from '@model/ISpecialOfferItem';
import IBasketItem from '@model/IBasketItem';

test('renders learn react link', () => {
  const products: IBasketItem[] = [
    {
      name: 'cheese',
      price: 20,
      quantity: 3,
      id: 1,
    },
    {
      name: 'Butter',
      price: 20,
      quantity: 3,
      id: 2,
    },
  ];

  const specialOffers: ISpecialOfferItem[] = [
    {
      name: 'cheese',
      savingAmount: 10,

      id: 1,
    },
    {
      name: 'Butter',
      savingAmount: 30,
      id: 2,
    },
  ];

  const subTotal: number = 60;
  const increaseQuantity = jest.fn();
  const decreaseQuantity = jest.fn();
  const { container } = render(
    <Basket
      products={products}
      specialOffers={specialOffers}
      subTotal={subTotal}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  );

  expect(container).toMatchSnapshot();
  
});
