import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Quantity from '@components/Quantity';
import user from '@testing-library/user-event';
import IBasketItem from '@model/IBasketItem';

test('renders learn react link', () => {
  const item: IBasketItem = {
    name: 'cheese',
    price: 20,
    quantity: 3,
    id: 1,
  };

  const increaseQuantity = jest.fn();
  const decreaseQuantity = jest.fn();
  const { container } = render(
    <Quantity
      item={item}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  );

  expect(container).toMatchSnapshot();
  act(() => user.click(screen.getByRole('button', { name: '+' })));
  expect(increaseQuantity).toHaveBeenCalledTimes(1);
  act(() => user.click(screen.getByRole('button', { name: '-' })));
  expect(decreaseQuantity).toHaveBeenCalledTimes(1);
});
