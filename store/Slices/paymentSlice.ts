import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'interfaces/product';
import { CartProduct } from './cartSlice';

interface InfoPayment {
  username: string;
  address: string;
  numberphone: string;
  email: string;
}

interface Payment {
  info: InfoPayment;
  total: number;
  cart: CartProduct[];
}

interface PaymentSlice {
  listPaid: Payment[];
  paymentInfo: Payment;
}

const initialState: PaymentSlice = {
  listPaid: [],
  paymentInfo: {
    info: {
      email: '',
      address: '',
      numberphone: '',
      username: '',
    },
    cart: [],
    total: 0,
  },
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    addCartPayment: (state, action: PayloadAction<CartProduct[]>) => {
      state.paymentInfo.cart = action.payload;
    },
    removeCartPayment: (state, action: PayloadAction<number>) => {
      const newData = state.paymentInfo.cart.filter(
        item => item.product.id !== action.payload
      );
      state.paymentInfo.cart = newData;
    },
    changeQuantityCartPayment: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const index = state.paymentInfo.cart.findIndex(
        item => item.product.id === action.payload.id
      );
      const copyArr = [...state.paymentInfo.cart];
      copyArr[index].quantity += action.payload.quantity;
      state.paymentInfo.cart = copyArr;
    },
    resetPayment: state => {
      return state;
    },
  },
});

export const {
  addCartPayment,
  resetPayment,
  removeCartPayment,
  changeQuantityCartPayment,
} = paymentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default paymentSlice.reducer;
