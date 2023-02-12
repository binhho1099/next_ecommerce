import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { IProduct } from 'interfaces/product';
import { CartProduct } from 'interfaces/cart';

interface CartSlice {
  listProducts: CartProduct[];
  listProductFavorite: IProduct[];
}

const initialState: CartSlice = {
  listProducts: [],
  listProductFavorite: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      const indexCart = state.listProducts.findIndex(
        productCart => productCart.product.id === action.payload.product.id
      );
      if (indexCart === -1) {
        state.listProducts.push(action.payload);
      } else {
        state.listProducts[indexCart].quantity += action.payload.quantity;
      }
    },
    removeProductToCart: (state, action: PayloadAction<number>) => {
      state.listProducts = state.listProducts.filter(
        productCart => productCart.product.id !== action.payload
      );
    },
    removeMultiProductToCart: (state, action: PayloadAction<number[]>) => {
      state.listProducts = state.listProducts.filter(
        productCart => !action.payload.includes(productCart.product.id)
      );
    },
    changeQuantityProductToCart: (state, action: PayloadAction<any>) => {
      const indexList = state.listProducts.findIndex(
        x => x.product.id === action.payload.id
      );
      state.listProducts[indexList].quantity = action.payload.quantity;
    },
    addOrRemoveProductFavorite: (state, action: PayloadAction<IProduct>) => {
      const indexList = state.listProductFavorite.findIndex(
        product => product.id === action.payload.id
      );
      if (indexList === -1) {
        state.listProductFavorite.push(action.payload);
      } else {
        state.listProductFavorite.splice(indexList, 1);
      }
    },
    resetCart: () => initialState,
  },
});

export const {
  addProductToCart,
  removeProductToCart,
  addOrRemoveProductFavorite,
  changeQuantityProductToCart,
  removeMultiProductToCart,
  resetCart,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
