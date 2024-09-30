import { useEffect, useState } from "react";

const FunctionalMounting = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(10);
    console.log(
      "Mounting Done, Only Run once after the component is succesfully rendered"
    );
  }, []);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default FunctionalMounting;
