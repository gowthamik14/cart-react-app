import IBasketItem from '@model/IBasketItem';
import IProduct from '@model/IProduct';
import React from 'react';
import { H4 } from './lib/typography';
import Products from './Products';

const ProductsBoard = ({
  products,
  handleAddProduct,
  productsAddedToBasket
}: {
  products: IProduct[];
  handleAddProduct: (item: IProduct) => void;
  productsAddedToBasket : IBasketItem[]
}): JSX.Element => {
  return (
    <div>
      <div className="p-2">
        <H4>Products</H4>
        <hr />
        <Products products={products} productsAddedToBasket={productsAddedToBasket} handleAddProduct={handleAddProduct} />
      </div>
    </div>
  );
};

export default ProductsBoard;
