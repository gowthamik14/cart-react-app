import IBasketItem from '@model/IBasketItem';
import ISpecialOfferItem from '@model/ISpecialOfferItem';
import SpecialOffer from '@model/SpecialOffers';

test('Special Offers - BreadRule', () => {
  const basketItems: IBasketItem[] = [
    {
      id: 1,
      name: 'Soup',
      quantity: 1,
      price: 60,
    },
    {
      id: 2,
      name: 'Bread',
      quantity: 2,
      price: 110,
    },
  ];

  const specialOffer = new SpecialOffer();
  const specialOffers: ISpecialOfferItem[] = specialOffer.calculateOfferPrice(
    basketItems
  );
  const expectedSpecialOffer: ISpecialOfferItem[] = [
    {
      id: 1,
      name: 'Soup',
      savingAmount: 0,
    },
    {
      id: 2,
      name: 'Bread',
      savingAmount: 55,
    },
  ];
  expect(specialOffers).toEqual(expectedSpecialOffer);
});

test('Special Offers - BreadRule with no Soup', () => {
    const basketItems: IBasketItem[] = [
      {
        id: 2,
        name: 'Bread',
        quantity: 2,
        price: 110,
      },
    ];
  
    const specialOffer = new SpecialOffer();
    const specialOffers: ISpecialOfferItem[] = specialOffer.calculateOfferPrice(
      basketItems
    );
    const expectedSpecialOffer: ISpecialOfferItem[] = [
      {
        id: 2,
        name: 'Bread',
        savingAmount: 0,
      },
    ];
    expect(specialOffers).toEqual(expectedSpecialOffer);
  });

test('Special Offers - CheeseRule', () => {
  const basketItems: IBasketItem[] = [
    {
      id: 1,
      name: 'Cheese',
      quantity: 2,
      price: 60,
    },
  ];

  const specialOffer = new SpecialOffer();
  const specialOffers: ISpecialOfferItem[] = specialOffer.calculateOfferPrice(
    basketItems
  );
  const expectedSpecialOffer: ISpecialOfferItem[] = [
    {
      id: 1,
      name: 'Cheese',
      savingAmount: 60,
    },
  ];
  expect(specialOffers).toEqual(expectedSpecialOffer);
});

test('Special Offers - CheeseRule - one', () => {
  const basketItems: IBasketItem[] = [
    {
      id: 1,
      name: 'Cheese',
      quantity: 1,
      price: 60,
    },
  ];

  const specialOffer = new SpecialOffer();
  const specialOffers: ISpecialOfferItem[] = specialOffer.calculateOfferPrice(
    basketItems
  );
  const expectedSpecialOffer: ISpecialOfferItem[] = [
    {
      id: 1,
      name: 'Cheese',
      savingAmount: 0,
    },
  ];
  expect(specialOffers).toEqual(expectedSpecialOffer);
});

test('Special Offers - ButterRule', () => {
  const basketItems: IBasketItem[] = [
    {
      id: 1,
      name: 'Butter',
      quantity: 1,
      price: 60,
    },
  ];

  const specialOffer = new SpecialOffer();
  const specialOffers: ISpecialOfferItem[] = specialOffer.calculateOfferPrice(
    basketItems
  );
  const expectedSpecialOffer: ISpecialOfferItem[] = [
    {
      id: 1,
      name: 'Butter',
      savingAmount: 20,
    },
  ];
  expect(specialOffers).toEqual(expectedSpecialOffer);
});

test('Special Offers - ButterRule - quantity 0 ', () => {
  const basketItems: IBasketItem[] = [
    {
      id: 1,
      name: 'Butter',
      quantity: 0,
      price: 60,
    },
  ];

  const specialOffer = new SpecialOffer();
  const specialOffers: ISpecialOfferItem[] = specialOffer.calculateOfferPrice(
    basketItems
  );
  const expectedSpecialOffer: ISpecialOfferItem[] = [
    {
      id: 1,
      name: 'Butter',
      savingAmount: 0,
    },
  ];
  expect(specialOffers).toEqual(expectedSpecialOffer);
});
