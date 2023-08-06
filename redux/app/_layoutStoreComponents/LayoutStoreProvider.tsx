"use client";
import { useState, useRef } from "react";
import { Provider } from "react-redux";

import { createStore } from "@/app/_store/store";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

// The provider to provide the store hook down the tree
export default function LayoutStoreProvider({
  children,
  headerContent,
}: {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
}) {
  const [counter, setCounter] = useState(0);

  const store = useRef(createStore());

  return (
    <Provider store={store.current}>
      <WrapperBox title="Layout Store Provider" type="client" important>
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => setCounter((counter) => counter + 1)}
            id="layout-local-counter-button"
          >
            Layout Store Local Counter: {counter}
          </Button>
          {headerContent}
        </div>
        {children}
      </WrapperBox>
    </Provider>
  );
}
