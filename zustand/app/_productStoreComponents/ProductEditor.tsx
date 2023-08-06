"use client";
import { useRouter } from "next/navigation";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { useProductContext } from "./ProductStoreProvider";

export default function ProductEditor() {
  const { product, api, setProduct } = useProductContext()();
  const router = useRouter();
  return (
    <WrapperBox title="Product Editor" type="client" important>
      <div className="grid grid-cols-[20%_80%] gap-1 mx-2 py-3">
        <div className="text-xl font-thin">SKU</div>
        <div className="text-xl" data-testid="editor-sku">
          {product?.sku}
        </div>

        <label className="text-xl font-thin" htmlFor="editor-name">
          Name
        </label>
        <div className="text-xl">
          <input
            id="editor-name"
            data-testid="editor-name"
            className="w-4/5 px-2 py-1 border-2 border-yellow-700 rounded-xl text-black"
            value={product?.name}
            onChange={(e) => setProduct({ name: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-5">
        <Button
          id="editor-save"
          onClick={() => {
            fetch(`${api}/products/${product?.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(product),
            });
            router.refresh();
          }}
        >
          Save
        </Button>
      </div>
    </WrapperBox>
  );
}
