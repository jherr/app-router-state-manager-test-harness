"use client";
import WrapperBox from "@/app/_components/WrapperBox";

import { useLayoutContext } from "./LayoutStoreProvider";

export default function LayoutStoreDisplay() {
  const { count } = useLayoutContext()();

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
