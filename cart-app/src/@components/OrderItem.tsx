import React from 'react';
import IProduct from '@model/IProduct';
import IOrderItem from '@model/IOrderItem';

interface IProductProp extends IOrderItem {
  handleAddProduct: (item: IProduct) => void
  increaseQuantity?: (id: number ) => void,
  decreaseQuantity?: (id:number) => void
}

const OrderItem: React.FC<IProductProp> = ({
  id,
  name,
  price,
  quantity,
  handleAddProduct,
  increaseQuantity,
  decreaseQuantity
}) => {
  return (
    <li
      className="flex justify-between items-center list-decimal list-inside border-b-2 border-gray-100	p-2"
      key={id}
    >
      <span>{name}</span>
      <div>
        <span className="text-gray-400 pr-1">£</span>
        <span>{(price / 100).toFixed(2)}</span>
        { quantity ===  0 ?
        <button
          className="ml-4 p-2  bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2"
          onClick={() => handleAddProduct({ id, name, price })}
        >
          Add
        </button>
        : 
        <span>
        <button
          className="ml-4 p-2 bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2"
          //onClick= {() => increaseQuantity(id)}       
        >
         +
         </button>
          <input className="ml-4 p-2 w-10 text-center text-blue rounded-md border-2 border-light-blue-400" defaultValue={quantity}></input>
          <button className="ml-4 p-2  bg-white-400 text-blue rounded-md border-2 border-blue-400 focus:outline-blue focus:ring-2 ring-blue-200 ring-offset-2"
          //onClick = {() => decreaseQuantity(id)}
           >-</button>
        </span>}
        
      </div>
    </li>
  );
};
export default OrderItem;
