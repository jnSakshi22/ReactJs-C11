import { useState } from "react";

const EvenOddNumbers = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <h1>Even Odd Numbers</h1>
      <ul>
        {numbers.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default EvenOddNumbers;
