import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, InfoPayment, Paid } from 'interfaces/cart';
import { uuid } from 'uuidv4';
import dayjs from 'dayjs';

interface PaymentSlice {
  listPaid: Paid[];
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
    addListPaid: (
      state,
      action: PayloadAction<{ info: InfoPayment; cart: CartProduct[] }>
    ) => {
      const data = { ...action.payload, id: uuid(), paidAt: dayjs().valueOf() };
      state.listPaid.push(data);
      state.listPayment = [];
    },
    resetPayment: () => initialState,
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
