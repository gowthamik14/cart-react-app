import { map } from 'ramda';
import { ButterRule } from './ButterRule';
import IBasketItem from './IBasketItem';
import ISpecialOfferItem from './ISpecialOfferItem';
import { BreadRule } from './BreadRule';
import { CheeseRule } from './CheeseRule';

interface ISpecialOffer {
  calculateOfferPrice(BasketItems: IBasketItem[]): ISpecialOfferItem[];
}

export default class SpecialOffer implements ISpecialOffer {
  specialOfferRules: ISpecialOfferRule[] = [
    new ButterRule(),
    new BreadRule(),
    new CheeseRule(),
  ];

  calculateOfferPrice(BasketItems: IBasketItem[]): ISpecialOfferItem[] {
    return map((element: IBasketItem) => {
      const { id, name } = element;
      return {
        id,
        name,
        savingAmount:
          this.specialOfferRules
            .find((rule) => rule.rule === name)
            ?.CalculateOfferPrice(BasketItems) ?? 0,
      };
    }, BasketItems);
  }
}

export interface ISpecialOfferRule {
  rule: string;
  CalculateOfferPrice(basketItems: IBasketItem[]): number;
}
