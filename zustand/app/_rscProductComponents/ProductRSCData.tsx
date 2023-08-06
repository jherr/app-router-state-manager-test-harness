import { Product } from "@/app/types";

import WrapperBox from "@/app/_components/WrapperBox";

export default function ProductRSCData({ product }: { product: Product }) {
  return (
    <WrapperBox title="Product RSC Data" type="rsc">
      <div className="grid grid-cols-[20%_80%] gap-1 mx-2">
        <div className="text-xl font-thin">SKU</div>
        <div className="text-xl font-bold" data-testid="rsc-sku">
          {product.sku}
        </div>

        <div className="text-xl font-thin">Name</div>
        <div className="text-xl font-bold" data-testid="rsc-name">
          {product.name}
        </div>
      </div>
    </WrapperBox>
  );
}
