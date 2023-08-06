import { Suspense } from "react";
import { headers } from "next/headers";

import WrapperBox from "@/app/_components/WrapperBox";
import ProductRSCData from "@/app/_rscProductComponents/ProductRSCData";

import ProductStoreProvider from "@/app/_productStoreComponents/ProductStoreProvider";
import ProductEditor from "@/app/_productStoreComponents/ProductEditor";
import ProductStoreDisplay from "@/app/_productStoreComponents/ProductStoreDisplay";

async function Product({ id }: { id: string }) {
  const productReq = await fetch(`${headers().get("x-api")}/products/${id}`);
  const product = await productReq.json();

  return (
    <WrapperBox title="Product [id] Route" type="rsc">
      <ProductStoreProvider product={product} api={headers().get("x-api")!}>
        <ProductEditor />
        <ProductStoreDisplay />
      </ProductStoreProvider>
      <ProductRSCData product={product} />
    </WrapperBox>
  );
}

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Suspense>
      <Product id={id} />
    </Suspense>
  );
}
