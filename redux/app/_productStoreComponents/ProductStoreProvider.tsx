"use client";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { setAPI, setProduct } from "@/app/_store/store";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { type Product } from "@/app/types";

// The provider to provide the store hook down the tree which takes
// the product and the API endpoint as props
export default function ProductStoreProvider({
  product,
  api,
  children,
}: {
  product: Product;
  api: string;
  children: React.ReactNode;
}) {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  // We can do this every time since it will never change
  dispatch(setAPI(api));

  // Any time we switch product routes we need to set the "global" store to the new product
  const loadedProduct = useRef(false);
  if (!loadedProduct.current) {
    dispatch(setProduct(product));
    loadedProduct.current = true;
  }

  return (
    <WrapperBox title="Product Store Provider" type="client" important>
      <Button
        onClick={() => setCounter((counter) => counter + 1)}
        id="counter-inside-product-store-provider"
      >
        Product Store Local Counter: {counter}
      </Button>
      {children}
    </WrapperBox>
  );
}
