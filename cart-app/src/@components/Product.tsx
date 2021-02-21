import React from 'react';
import IProduct from '@model/IProduct';

interface IProductProp extends IProduct {
  handleAddProduct: (item: IProduct) => void,
  allowAdd: boolean
}

const Product: React.FC<IProductProp> = ({
  id,
  name,
  price,
  handleAddProduct,
  allowAdd = true
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
        <button
          className= {`ml-4 p-2 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2 ${allowAdd ? `bg-blue-400`: 'bg-gray-400' }` }
          onClick={() => handleAddProduct({ id, name, price })}
          disabled= {!allowAdd} 
        >
          Add
        </button>
      </div>
    </li>
  );
};
export default Product;
