"use client";
import { useSelector } from "react-redux";

import WrapperBox from "@/app/_components/WrapperBox";

import { selectCount } from "@/app/_store/store";

export default function LayoutStoreDisplay() {
  const count = useSelector(selectCount);

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
