import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

function Counter({ setCount, children }: CounterProps) {
  return (
    <>
      <h3>{children}</h3>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
