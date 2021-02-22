

import { getSubTotalCost } from '@utils';

import {
  ADD_PRODUCT_TO_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './@store/shoppingBasket.actionTypes';

import IBasketItem from '@model/IBasketItem';
import SpecialOffer from '@model/SpecialOffers';
import ISpecialOfferItem from '@model/ISpecialOfferItem';

export const initialState: {
    products: IBasketItem[];
    subTotal: number;
    totalCost: number;
    specialOffers: ISpecialOfferItem[];
  } = {
    products: [],
    subTotal: 0,
    totalCost: 0,
    specialOffers: [],
  };
  
  export function basketReducer(state = initialState, action: any) {
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
          subTotal: getSubTotalCost(productsAddedToBasket),
          specialOffers: specialOffer.calculateOfferPrice(productsAddedToBasket),
        };
      }
      case INCREASE_QUANTITY: {
        const { id, quantity } = action.payload;
        const productsAddedToBasket = state.products.map((item: IBasketItem) =>
          item.id === id ? { ...item, quantity: quantity + 1 } : item
        );
  
        return {
          ...state,
          products: productsAddedToBasket,
          subTotal: getSubTotalCost(productsAddedToBasket),
          specialOffers: specialOffer.calculateOfferPrice(productsAddedToBasket),
        };
      }
      case DECREASE_QUANTITY: {
        const { id, quantity } = action.payload;
        const productsAddedToBasket = state.products.map((item: IBasketItem) =>
          item.id === id && quantity !== 0
            ? { ...item, quantity: quantity - 1 }
            : item
        );
  
        return {
          ...state,
          products: productsAddedToBasket,
          subTotal: getSubTotalCost(productsAddedToBasket),
          specialOffers: specialOffer.calculateOfferPrice(productsAddedToBasket),
        };
      }
      default: {
        return state;
      }
    }
  }