import IBasketItem from './IBasketItem';
import { ISpecialOfferRule } from './SpecialOffers';

export class CheeseRule implements ISpecialOfferRule {
  public rule: string = 'Cheese';

  CalculateOfferPrice(basketItems: IBasketItem[]): number {
    const cheeseItems = basketItems.find((i) => i.name === 'Cheese') ?? {
      quantity: 0,
      price: 0,
    };
    if (cheeseItems?.quantity >= 2) {
      const twoSets = cheeseItems.quantity / 2;
      return Math.floor(twoSets) * cheeseItems.price;
    }
    return 0;
  }
}
