import React from 'react';

interface IBasketItemCostProp {
  price: number;
  quantity: number;
  savingAmount: number;
}

const BasketItemCost: React.FC<IBasketItemCostProp> = ({
  price,
  quantity,
  savingAmount,
}) => {
  const totalBasketItemPrice = price * quantity;
  const totalPrice = totalBasketItemPrice - savingAmount;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-end my-2 border-b-2 border-gray-100 text-gray-500">
        <div className="mx-2">Item price </div>
        <div>
          {`£${(price / 100).toFixed(2)} * ${quantity} = £${(
            totalBasketItemPrice / 100
          ).toFixed(2)}`}
        </div>
      </div>
      {savingAmount > 0 && (
        <div className="flex justify-end items-center my-2 border-b-2 border-gray-100 text-red-500">
          <div className="mx-2">Savings</div>
          <div>{`£${(savingAmount / 100).toFixed(2)}`}</div>
        </div>
      )}
      <div className="flex justify-end my-2 items-center">
        <div className="mx-2">Item cost </div>
        <div>{`£${(totalPrice / 100).toFixed(2)}`}</div>
      </div>
    </div>
  );
};
export default BasketItemCost;
