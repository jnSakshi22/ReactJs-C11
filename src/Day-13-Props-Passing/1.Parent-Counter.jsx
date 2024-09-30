import { useState } from "react";
import ChildCounter from "./2.Child-Counter";

const ParentCounter = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = (value = 1) => {
    setCounter((val) => val + value);
  };
  const onDecrement = (value = 1) => {
    if (counter === 1) {
      return;
    }
    setCounter((val) => val - value);
  };

  return (
    <div>
      <ChildCounter
        myCounter={counter}
        ankitIncrement={() => onIncrement(10)}
        ankitDecrement={() => onDecrement(10)}
      />
      <hr />
      <button onClick={() => onIncrement(1)}>Increment</button>
      <button onClick={() => onDecrement(1)} disabled={counter === 1}>
        Decrement
      </button>
    </div>
  );
};

export default ParentCounter;
