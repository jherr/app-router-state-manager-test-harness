import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/types";

export interface ProductState {
  product: Product | null;
  api: string;
}

const initialState: ProductState = {
  product: null,
  api: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      if (state.product) {
        state.product.name = action.payload;
      }
    },
    setAPI: (state, action: PayloadAction<string>) => {
      state.api = action.payload;
    },
  },
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      console.log("increment", state.count);
      state.count += 1;
    },
  },
});

export const createStore = () =>
  configureStore({
    reducer: {
      counter: counterSlice.reducer,
      product: productSlice.reducer,
    },
  });

export const { setProduct, setAPI, setName } = productSlice.actions;
export const { increment } = counterSlice.actions;

type Store = ReturnType<typeof createStore>;

export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];

export const selectCount = (state: RootState) => state.counter.count;

export const selectAPI = (state: RootState) => state.product.api;
export const selectProduct = (state: RootState) => state.product.product;
