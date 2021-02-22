
import reduce from 'ramda/src/reduce';
import add from 'ramda/src/add';
import map from 'ramda/src/map';

import ISpecialOfferItem from '@model/ISpecialOfferItem';


 const getTotalCost = (products: ISpecialOfferItem[], totalCost : number): number => {
 const totalSavingsAmount =   (reduce(add, 0, map((item: ISpecialOfferItem) => item.savingAmount)(products)));
  return totalCost - totalSavingsAmount;
};

export default getTotalCost;


