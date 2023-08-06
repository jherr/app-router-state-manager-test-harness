"use client";
import { createContext, useContext, useState } from "react";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { type Product } from "@/app/types";

// A simple product store that holds the product as well as the API
// endpoint to save the product when we change it
const useProduct = ({
  product: initialProduct,
  api,
}: {
  product: Product;
  api: string;
}) => {
  const [product, setProduct] = useState(initialProduct);
  return {
    product,
    setProduct: (productUpdate: Partial<Product>) => {
      setProduct((product) => ({ ...product, ...productUpdate }));
    },
    api,
  };
};

// A context to provide the store hook down the tree
const ProductContext = createContext<ReturnType<typeof useProduct> | null>(
  null
);

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
  const productStore = useProduct({ product, api });

  return (
    <WrapperBox title="Product Store Provider" type="client" important>
      <Button
        onClick={() => setCounter((counter) => counter + 1)}
        id="counter-inside-product-store-provider"
      >
        Product Store Local Counter: {counter}
      </Button>
      <ProductContext.Provider value={productStore}>
        {children}
      </ProductContext.Provider>
    </WrapperBox>
  );
}
