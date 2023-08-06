"use client";
import { createContext, useContext, useState } from "react";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

const useCounter = (startValue: number) => {
  const [count, setCount] = useState(startValue);
  return { count, increment: () => setCount((count) => count + 1) };
};

// A context we use to store the current store hook
const LayoutContext = createContext<ReturnType<typeof useCounter> | null>(null);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("Missing LayoutContext");
  return context;
};

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
  const layoutStore = useCounter(0);

  return (
    <WrapperBox title="Layout Store Provider" type="client" important>
      <LayoutContext.Provider value={layoutStore}>
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
      </LayoutContext.Provider>
    </WrapperBox>
  );
}
