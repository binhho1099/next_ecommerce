import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { IProduct } from 'interfaces/product';

interface AppType {
  categories: string[];
  loading: boolean;
}

const initialState: AppType = {
  categories: [],
  loading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategories, setLoading } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default appSlice.reducer;
