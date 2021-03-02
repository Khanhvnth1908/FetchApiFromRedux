import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "./api/productApi";
import ProductList from "./features/product/components/ProductList";
import { fetchProduct } from "./reducer/productSlice";

function App() {

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  console.log('ProductInital', productList);

  return (
    <div className="App">
      <ProductList productList={productList} />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
