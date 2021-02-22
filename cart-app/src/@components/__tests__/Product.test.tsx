import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Product from '@components/Product';
import IProduct from '@model/IProduct';
import user from '@testing-library/user-event';

test('renders learn react link', () => {
  const product: IProduct = {
    name: 'cheese',
    price: 20,
    id: 1,
  };

  const handleAddProduct = jest.fn();
  const { container } = render(
    <Product {...product} handleAddProduct={handleAddProduct} allowAdd={true} />
  );

  expect(container).toMatchSnapshot();
  act(() => user.click(screen.getByRole('button', { name: 'Add' })));
  expect(handleAddProduct).toHaveBeenCalledTimes(1);
});
