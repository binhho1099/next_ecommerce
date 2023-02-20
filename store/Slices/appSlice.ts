import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { IProduct } from 'interfaces/product';
import { IUser } from 'interfaces';

interface AppType {
  categories: string[];
  loading: boolean;
  user: IUser;
}

const initialState: AppType = {
  categories: [],
  loading: false,
  user: {
    displayName: '',
    email: '',
    photoURL: '',
  },
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
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setCategories, setLoading, setUser } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default appSlice.reducer;
