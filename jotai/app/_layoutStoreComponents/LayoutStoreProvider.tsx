"use client";
import { useState, useRef } from "react";
import { createStore, Provider } from "jotai";

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

  // We use a ref to keep the store hook stable across re-renders
  // This component is never re-created, even on route changes
  const layoutStore = useRef(createStore());

  return (
    <WrapperBox title="Layout Store Provider" type="client" important>
      <Provider store={layoutStore.current}>
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
      </Provider>
    </WrapperBox>
  );
}
