"use client";
import { useStore, useAtom } from "jotai";
import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { countAtom } from "./layoutStoreAtoms";

export default function LayoutStoreButton() {
  const store = useStore();
  const [count, setCount] = useAtom(countAtom, { store });

  return (
    <WrapperBox title="Layout Store Button" type="client" important>
      <Button onClick={() => setCount((c) => c + 1)} id="layout-counter-button">
        Layout Store Counter: {count}
      </Button>
    </WrapperBox>
  );
}
