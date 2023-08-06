"use client";
import { useSelector, useDispatch } from "react-redux";

import { selectCount, increment } from "@/app/_store/store";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

export default function LayoutStoreButton() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <WrapperBox title="Layout Store Button" type="client" important>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
        id="layout-counter-button"
      >
        Layout Store Counter: {count}
      </Button>
    </WrapperBox>
  );
}
