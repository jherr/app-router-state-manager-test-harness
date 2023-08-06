"use client";

import { createContext, useContext, useState } from "react";

import WrapperBox from "@/app/_components/WrapperBox";
import Button from "@/app/_components/Button";

export const useCounter = () => useState(0);

export const CounterContext = createContext<ReturnType<
  typeof useCounter
> | null>(null);

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("Missing CounterContext");
  return context;
};

function MainLayoutContextButton() {
  const [count, setCount] = useCounterContext();

  return (
    <Button onClick={() => setCount(count + 1)} id="client-context-state">
      Main Layout Context Counter: {count}
    </Button>
  );
}

export default function MainLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={useCounter()}>
      <WrapperBox type="client" title="Main Layout Provider">
        <div className="flex gap-5 mx-5">
          <Button
            onClick={() => setCount(count + 1)}
            id={`main-page-local-state`}
          >
            Main Layout Local Counter: {count}
          </Button>
          <MainLayoutContextButton />
        </div>
        {children}
      </WrapperBox>
    </CounterContext.Provider>
  );
}
