import { useEffect, useState } from "react";

const APITask = () => {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        const promise = products.map((product) =>
          fetch(`https://fakestoreapi.com/products/${product.id}`).then(
            (response) => response.json()
          )
        );

        Promise.all(promise)
          .then((detailedProducts) => {
            setData(detailedProducts);
            detailedProducts.forEach((product) => {
              console.log("Data with ID: ", product);
              setProducts(products);
            });
          })
          .catch((error) =>
            console.error("Error fetching product details:", error)
          );
      });
  }, []);

  console.log(data);
  return (
    <>
      <h1>API Calling</h1>
      {data &&
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.id}</h3>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
    </>
  );
};

export default APITask;
