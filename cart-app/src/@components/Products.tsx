import React from 'react';
import OrderItem from './OrderItem';
import IProduct from '@model/IProduct';
import IOrderItem from '@model/IOrderItem';
import Product from './Product';
import IBasketItem from '@model/IBasketItem';

const Products = ({
  products,
  handleAddProduct,
  productsAddedToBasket
}: {
  products: IProduct[];
  handleAddProduct: (item: IProduct) => void;
  productsAddedToBasket: IBasketItem[]
}): JSX.Element => {
  return (
    <ul>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}       
          handleAddProduct={handleAddProduct} 
          allowAdd= {productsAddedToBasket.find(i=> i.id === product.id) ? false : true}        
        />
      ))}
    </ul>
  );
};

export default Products;
