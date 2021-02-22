import React from 'react';
import IBasketItem from '@model/IBasketItem';


interface IQuantityProp {
    item : IBasketItem,
    increaseQuantity : (basketItem: IBasketItem ) => void
    decreaseQuantity :  (basketItem: IBasketItem ) => void
}

const Quantity : React.FC<IQuantityProp> = ({item, increaseQuantity, decreaseQuantity}) => {
return (
<span>
<button
  className="ml-4 p-2 bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2"
  onClick={() => increaseQuantity({...item})}
>
  +
</button>
<span className="ml-4 p-2 w-10 text-center text-blue rounded-md">
  {item.quantity}
</span>
<button
  className="ml-4 p-2  bg-white-400 text-blue rounded-md border-2 border-blue-400 focus:outline-blue focus:ring-2 ring-blue-200 ring-offset-2"
  onClick={() => decreaseQuantity({...item})}
>
  -
</button>
</span>
);
}

export default Quantity;
