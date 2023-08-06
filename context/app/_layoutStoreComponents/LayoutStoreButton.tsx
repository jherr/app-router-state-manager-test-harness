"use client";
import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

import { useLayoutContext } from "./LayoutStoreProvider";

export default function LayoutStoreButton() {
  const { count, increment } = useLayoutContext();

  return (
    <WrapperBox title="Layout Store Button" type="client" important>
      <Button onClick={increment} id="layout-counter-button">
        Layout Store Counter: {count}
      </Button>
    </WrapperBox>
  );
}
