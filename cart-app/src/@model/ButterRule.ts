import IBasketItem from './IBasketItem';
import { ISpecialOfferRule } from './SpecialOffers';

export class ButterRule implements ISpecialOfferRule {
  public rule: string = 'Butter';

  CalculateOfferPrice(basketItems: IBasketItem[]): number {
    const butterItem = basketItems.find((i) => i.name === this.rule);
    if (butterItem != null) {
      const totalAmount = butterItem.quantity * butterItem.price;
      if (totalAmount !== 0) {
        return totalAmount / 3;
      }
    }
    return 0;
  }
}
