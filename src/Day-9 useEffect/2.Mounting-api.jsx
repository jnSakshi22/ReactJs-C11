import { useState, useEffect } from "react";

const FunctionalAPIMounting = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log(
      "Mounting Done, Only Run once after the component is succesfully rendered"
    );

    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  console.log("Products: ", counter, products);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
      {products ? (
        products.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })
      ) : (
        <p>Please Wait</p>
      )}
    </div>
  );
};

export default FunctionalAPIMounting;
