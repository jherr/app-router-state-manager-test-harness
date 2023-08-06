"use client";
import WrapperBox from "@/app/_components/WrapperBox";

import { useProductContext } from "./ProductStoreProvider";

export default function ProductStoreDisplay() {
  const { product } = useProductContext()();
  return (
    <WrapperBox title="Product Store Display" type="client" important>
      <div className="grid grid-cols-[20%_80%] gap-1 mx-2">
        <div className="text-xl font-thin">SKU</div>
        <div className="text-xl font-bold" data-testid="display-sku">
          {product?.sku}
        </div>
        <div className="text-xl font-thin">Name</div>
        <div className="text-xl font-bold" data-testid="display-name">
          {product?.name}
        </div>
      </div>
    </WrapperBox>
  );
}
