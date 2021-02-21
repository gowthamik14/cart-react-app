
import reduce from 'ramda/src/reduce';
import add from 'ramda/src/add';
import map from 'ramda/src/map';
import IBasketItem from '@model/IBasketItem';
import propEq  from 'ramda/src/propEq';
import findIndex  from 'ramda/src/findIndex';

export const getTotalCost = (products: IBasketItem[]): string => {
  let totalCost =  (reduce(add, 0, map((item: IBasketItem) => item.price * item.quantity)(products)));
  return (totalCost/100).toFixed(2);
};


