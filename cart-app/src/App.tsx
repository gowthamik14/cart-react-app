import React, { useReducer } from 'react';
import './tailwind.gen.css';
import ProductsBoard from '@components/ProductsBoard';
import { getTotalCost } from '@utils';
import Basket from '@components/Basket';
import products from '@static/products';
import { ADD_PRODUCT_TO_BASKET, INCREASE_QUANTITY,DECREASE_QUANTITY } from './@store/shoppingBasket.actionTypes';
import IProduct from '@model/IProduct';
import IBasketItem from '@model/IBasketItem';
import IOrderItem from '@model/IOrderItem';
import CartSummary from '@components/CartSummary';
import SpecialOffer from '@model/SpecialOffers';
import ISpecialOfferItem from '@model/ISpecialOfferItem';



const initialState: {
  products: IBasketItem[];
  subTotal: string,
  totalCost: string;
  specialOffers: ISpecialOfferItem[]
} = {
  products: [],
  subTotal: '0',
  totalCost: '0',
  specialOffers:[],

};

function basketReducer(state = initialState, action: any) {
  const specialOffer = new SpecialOffer();
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET: {
     
      const productsAddedToBasket = [
        ...state.products,
        { ...action.payload, quantity: 1 },
      ];
      return {
        ...state,
        products: productsAddedToBasket,
        totalCost: getTotalCost(productsAddedToBasket),
        specialOffers : specialOffer.calculateOfferPrice(productsAddedToBasket)
      };
    }
    case INCREASE_QUANTITY: {
        const { id,quantity} = action.payload
        const productsAddedToBasket = state.products.map((item : IBasketItem) => item.id === id ? {...item,quantity : quantity + 1 } : item); 
        
        return {
          ...state,
          products: productsAddedToBasket,
          totalCost: getTotalCost(productsAddedToBasket),
          specialOffers: specialOffer.calculateOfferPrice(productsAddedToBasket)
        }
    }
    case DECREASE_QUANTITY: {   
      const { id,quantity} = action.payload
      const productsAddedToBasket = state.products.map((item : IBasketItem) => item.id === id  && quantity !== 0 ? {...item,quantity : quantity - 1 } : item); 
      
      return {
        ...state,
        products: productsAddedToBasket,
        totalCost: getTotalCost(productsAddedToBasket),
        specialOffers: specialOffer.calculateOfferPrice(productsAddedToBasket)
      }
  }
    default: {
      return state;
    }
  }
}

function App() {
  const [basketState, dispatch] = useReducer(basketReducer, initialState);


  const orderItems : IOrderItem[] = products.map((product) => ({...product,'quantity' : 0}));

  const handleAddProduct = (product: IProduct) => {
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: product,
    });
  };


  const increaseQuantity = (basketItem : IBasketItem) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: basketItem,
    });
  };

  const decreaseQuantity = (basketItem : IBasketItem) => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: basketItem,
    });
  };

  return (
    <div className="flex justify-around h-screen m-4 border-2 border-gray-300">
      <section className="w-2/5 bg-white m-4 border-1 border-gray-200 shadow-lg">
        <ProductsBoard products= {products} productsAddedToBasket={basketState.products} handleAddProduct= {handleAddProduct}/>
      </section>
    
      <section className="w-2/5 h-25 bg-white m-4 border-1 border-gray-200 shadow-lg">
        <Basket {...basketState} increaseQuantity = {increaseQuantity} decreaseQuantity = {decreaseQuantity} />     
      </section>     
      <section className="w-2/5 h-25 bg-white m-4 border-1 border-gray-200 shadow-lg">
        <CartSummary {...basketState} />     
      </section>
      </div>
  );
}

export default App;
