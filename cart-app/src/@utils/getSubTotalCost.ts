import reduce from 'ramda/src/reduce';
import add from 'ramda/src/add';
import map from 'ramda/src/map';
import IBasketItem from '@model/IBasketItem';

 const getSubTotalCost = (products: IBasketItem[]): number => {
    return (reduce(add, 0, map((item: IBasketItem) => item.price * item.quantity)(products)));
    
  };

  export default getSubTotalCost;