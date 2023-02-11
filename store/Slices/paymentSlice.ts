import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from './cartSlice';
import { InfoPayment } from 'interfaces/cart';

interface Payment {
  info: InfoPayment;
  cart: CartProduct[];
}

interface PaymentSlice {
  listPaid: Payment[];
  listPayment: CartProduct[];
}

const initialState: PaymentSlice = {
  listPaid: [],
  listPayment: [],
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    addCartPayment: (state, action: PayloadAction<CartProduct[]>) => {
      state.listPayment = action.payload;
    },
    removeCartPayment: (state, action: PayloadAction<number>) => {
      const newData = state.listPayment.filter(
        item => item.product.id !== action.payload
      );
      state.listPayment = newData;
    },
    changeQuantityCartPayment: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const index = state.listPayment.findIndex(
        item => item.product.id === action.payload.id
      );
      const copyArr = [...state.listPayment];
      copyArr[index].quantity += action.payload.quantity;
      state.listPayment = copyArr;
    },
    setQuantityCartPayment: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const index = state.listPayment.findIndex(
        item => item.product.id === action.payload.id
      );
      const copyArr = [...state.listPayment];
      copyArr[index].quantity = action.payload.quantity;
      state.listPayment = copyArr;
    },
    addListPaid: (state, action: PayloadAction<Payment>) => {
      state.listPaid.push(action.payload);
      state.listPayment = [];
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
  setQuantityCartPayment,
  addListPaid,
} = paymentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default paymentSlice.reducer;
