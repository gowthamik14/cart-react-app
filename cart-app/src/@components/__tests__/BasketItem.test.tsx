import React from 'react';
import { render } from '@testing-library/react';
import BasketItem from '@components/BasketItem';
import IBasketItem from '@model/IBasketItem';

test('renders learn react link', () => {
  const basketItem: IBasketItem = {
    name: 'cheese',
    price: 20,
    quantity: 3,
    id: 1,
  };
  const savingAmount: number = 20;
  const increaseQuantity = jest.fn();
  const decreaseQuantity = jest.fn();
  const { container } = render(
    <BasketItem
      basketItem={basketItem}
      savingAmount={savingAmount}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  );


  expect(container).toMatchSnapshot();
});
