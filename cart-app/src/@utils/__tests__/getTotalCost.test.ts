import ISpecialOfferItem from '@model/ISpecialOfferItem';
import { getTotalCost } from '../';

test('get TotalCost', () => {
  const offerItems: ISpecialOfferItem[] = [
    {
      id: 1,
      name: 'Cheese',
      savingAmount: 10,
    },
    {
      id: 1,
      name: 'Butter',
      savingAmount: 10,
    },
  ];
  const totalCost: number = 50;
  const amount = getTotalCost(offerItems, totalCost);
  expect(amount).toStrictEqual(30);
});
