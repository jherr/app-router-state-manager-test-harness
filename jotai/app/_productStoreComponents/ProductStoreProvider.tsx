"use client";
import { useState, useRef } from "react";
import { useStore, useSetAtom } from "jotai";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { apiAtom, productAtom } from "./productStoreAtoms";

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

  const store = useStore();
  const setApi = useSetAtom(apiAtom, { store });
  setApi(api);

  const setProduct = useSetAtom(productAtom, { store });
  const loaded = useRef(false);
  if (!loaded.current) {
    setProduct(product);
    loaded.current = true;
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
