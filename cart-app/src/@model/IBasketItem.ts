import IProduct from './IProduct';

export default interface IBasketItem extends IProduct {
  quantity: number;
}
