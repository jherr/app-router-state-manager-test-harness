"use client";
import { useStore, useAtomValue } from "jotai";

import WrapperBox from "@/app/_components/WrapperBox";

import { countAtom } from "./layoutStoreAtoms";

export default function LayoutStoreDisplay() {
  const store = useStore();
  const count = useAtomValue(countAtom, { store });

  return (
    <WrapperBox title="Layout Display" type="client" important>
      <div
        data-testid="layout-counter-value"
        className="text-3xl font-bold italic"
      >
        {count}
      </div>
    </WrapperBox>
  );
}
