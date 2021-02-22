import React from 'react';
import { render} from '@testing-library/react';
import Products from '@components/Products';
import IBasketItem from '@model/IBasketItem';
import IProduct from '@model/IProduct';


test('renders learn react link', () => {
  const products: IProduct[] = [
    {
      name: 'cheese',
      price: 20,
      id: 1,
    },
    {
      name: 'Butter',
      price: 20,
      id: 1,
    },
  ];

  const productsAddedToBasket: IBasketItem[] = [
    {
      name: 'cheese',
      price: 20,
      id: 1,
      quantity: 0,
    },
    {
      name: 'Butter',
      price: 20,
      id: 1,
      quantity: 0,
    },
  ];

  const handleAddProduct = jest.fn();
  const { container } = render(
    <Products
      products={products}
      handleAddProduct={handleAddProduct}
      productsAddedToBasket= {productsAddedToBasket}
    />
  );

  expect(container).toMatchSnapshot();
  
});
