import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading title="Hi BLEAT" />
      <Section>
        <p>Gachimuchi</p>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
