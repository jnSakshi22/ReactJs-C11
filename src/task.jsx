import { useEffect, useState } from "react";

const CallingAPI = () => {
  const [products, setProducts] = useState(null);

  // const apiCalling = async () => {
  //   const result = await fetch("https://fakestoreapi.com/products");
  //   const parsedResult = await result.json();

  //   console.log(parsedResult);
  // };

  useEffect(() => {
    // const apiCalling = async () => {
    //   const result = await fetch("https://fakestoreapi.com/products");
    //   const parsedResult = await result.json();
    //   setProducts(parsedResult);
    // };
    // apiCalling();

    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  console.log("Products: ", products);
  return (
    <>
      <div>Calling API</div>
    </>
  );
};

export default CallingAPI;
