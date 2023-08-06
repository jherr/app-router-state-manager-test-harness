import { headers } from "next/headers";
import Link from "next/link";
import WrapperBox from "@/app/_components/WrapperBox";

import { type Product } from "@/app/types";

export default async function Products() {
  const productsReq = await fetch(`${headers().get("x-api")}/products`);
  const products = (await productsReq.json()) as Product[];

  return (
    <WrapperBox title="Product Links" type="rsc">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {products.map(({ id }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>Product {id} Link</Link>
          </li>
        ))}
      </ul>
    </WrapperBox>
  );
}
