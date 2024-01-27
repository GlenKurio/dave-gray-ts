import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";

type User = {
  id: number;
  username: string;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log("Users:", users);
    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  type fibFunc = (n: number) => number;
  let myNum = 27;

  const fib: fibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 2) + fib(n - 1);
  };
  const result = useMemo(() => fib(myNum), [myNum]);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={addTwo}>Add</button>
      <h2> Fibo result: {result}</h2>
    </>
  );
}

export default App;
