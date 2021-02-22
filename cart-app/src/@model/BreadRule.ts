/* eslint-disable no-self-compare */
import IBasketItem from './IBasketItem';
import { ISpecialOfferRule } from './SpecialOffers';
import min from 'ramda/src/min';

export class BreadRule implements ISpecialOfferRule {
  public rule: string = 'Bread';

  CalculateOfferPrice(basketItems: IBasketItem[]): number {
    const soupItems = basketItems.find((i) => i.name === 'Soup') ?? {
      quantity: 0,
      price: 0,
    };
    const breadItems = basketItems.find((i) => i.name === 'Bread') ?? {
      quantity: 0,
      price: 0,
    };
    if (soupItems?.quantity > 0 && breadItems?.quantity > 0) {
      const reduceBy = min(soupItems.quantity, breadItems.quantity);
      return (reduceBy * breadItems.price) / 2;
    }
    return 0;
  }
}
