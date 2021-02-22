import React, { useReducer } from 'react';
import './tailwind.gen.css';
import ProductsBoard from '@components/ProductsBoard';
import Basket from '@components/Basket';
import products from '@static/products';
import {
  ADD_PRODUCT_TO_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './@store/shoppingBasket.actionTypes';
import IProduct from '@model/IProduct';
import IBasketItem from '@model/IBasketItem';
import { basketReducer, initialState } from 'basketReducer';

function App() {
  const [basketState, dispatch] = useReducer(basketReducer, initialState);

  const handleAddProduct = (product: IProduct) => {
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: product,
    });
  };

  const increaseQuantity = (basketItem: IBasketItem) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: basketItem,
    });
  };

  const decreaseQuantity = (basketItem: IBasketItem) => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: basketItem,
    });
  };

  return (
    <div className="flex justify-around h-screen m-4 border-2 border-gray-300">
      <section className="w-2/5 bg-white m-4 border-1 border-gray-200 shadow-lg">
        <ProductsBoard
          products={products}
          productsAddedToBasket={basketState.products}
          handleAddProduct={handleAddProduct}
        />
      </section>

      <section className="w-3/5 bg-white m-4 border-1 border-gray-200 shadow-lg overflow-y-scroll">
        <Basket
          {...basketState}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </section>
    </div>
  );
}

export default App;
