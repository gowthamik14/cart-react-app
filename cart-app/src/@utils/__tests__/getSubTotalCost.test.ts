
import IBasketItem from '@model/IBasketItem';
import { getSubTotalCost } from '../';

test('get SubTotalCost', () => {
    const BasketItems : IBasketItem[] = [
        {
            id: 1,
            name: 'Cheese',
            price : 10,
            quantity :3
        },
        {
            id: 1,
            name: 'Butter',
            price : 10,
            quantity :2
        }
    ];
    const amount = getSubTotalCost(BasketItems)
    expect(amount).toStrictEqual(50)
  });
  