
import ISpecialOfferItem from '@model/ISpecialOfferItem';
import getSavingsAmount from '@utils/getSavingsAmount';


test('get Saving Amount', () => {
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
    const amount = getSavingsAmount(offerItems)
    expect(amount).toStrictEqual(20)
  });
  