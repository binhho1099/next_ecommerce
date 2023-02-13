import { IProduct } from './product';

export interface InfoPayment {
  username: string;
  address: string;
  phonenumber: string;
  email: string;
}

export interface CartProduct {
  product: IProduct;
  quantity: number;
}
export interface Paid {
  id: string;
  info: InfoPayment;
  cart: CartProduct[];
  paidAt: number;
  total: number;
}
