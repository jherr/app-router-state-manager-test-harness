"use client";
import { createContext, useContext, useState, useRef } from "react";
import { create } from "zustand";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { type Product } from "@/app/types";

// A simple product store that holds the product as well as the API
// endpoint to save the product when we change it
const createProductStore = ({
  product,
  api,
}: {
  product: Product;
  api: string;
}) =>
  create<{
    api: string;
    product: Product | null;
    setProduct: (product: Partial<Product>) => void;
  }>((set, get) => ({
    api,
    product,
    setProduct: (product: Partial<Product>) => {
      set({ product: { ...get().product, ...product } as Product });
    },
  }));

// A context to provide the store hook down the tree
const ProductContext = createContext<ReturnType<
  typeof createProductStore
> | null>(null);

// A custom hook to access to get the store hook
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("Missing ProductContext");
  return context;
};

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

  // We use a ref to keep the store hook stable across re-renders
  // When the route changes, even on the client, this component is re-created
  const productStore = useRef(createProductStore({ product, api }));

  return (
    <WrapperBox title="Product Store Provider" type="client" important>
      <Button
        onClick={() => setCounter((counter) => counter + 1)}
        id="counter-inside-product-store-provider"
      >
        Product Store Local Counter: {counter}
      </Button>
      <ProductContext.Provider value={productStore.current}>
        {children}
      </ProductContext.Provider>
    </WrapperBox>
  );
}
