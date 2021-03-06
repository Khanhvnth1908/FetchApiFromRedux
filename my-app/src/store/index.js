import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/productSlice";

const rootReducer = {
  product: productReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
