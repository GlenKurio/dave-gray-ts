import { CounterProvider, initialState } from "./context/CounterContex";

import Counter from "./Counter";

function App() {
  return (
    <>
      <CounterProvider count={initialState.count} text={initialState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
