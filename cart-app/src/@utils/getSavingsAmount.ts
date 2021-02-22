
import reduce from 'ramda/src/reduce';
import add from 'ramda/src/add';
import map from 'ramda/src/map';

import ISpecialOfferItem from '@model/ISpecialOfferItem';

 const getSavingsAmount = (specialOffers: ISpecialOfferItem[]): number => {
    return reduce(add, 0, map((item: ISpecialOfferItem) => item.savingAmount)(specialOffers));
  }

  export default getSavingsAmount;