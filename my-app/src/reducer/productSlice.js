import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

// export const fetchProduct = createAsyncThunk(
//   "product/fetchProduct",
//   async () => {
//     const response = await productApi.getAll();
//     return response;z
//   }
// );

export const fetchProduct = createAsyncThunk("product/getAll", async () => {
  const response = await productApi.getAll();
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchProduct.fulfilled]: (state, action) => {
      // Add user to the state array
      state.product = action.payload;
    },
  },
});

const { reducer } = productSlice;

export default reducer;
