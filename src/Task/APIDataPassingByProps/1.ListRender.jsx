import { useState, useEffect } from "react";
import ConfirmDelete from "./2.ConfirmDelete";

const ListRender = () => {
  const [products, setProducts] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const APICalling = async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      const parsedResult = await result.json();
      setProducts(parsedResult);
    };
    APICalling();
  }, []);

  const handleDelete = () => {
    setIsDialogOpen(true);
    // setProducts((prev) => prev.filter((todo) => todo !== item));
  };

  console.log(products);
  return (
    <div>
      <h1>My Products</h1>
      {products &&
        products.map((item) => (
          <li key={item.id}>
            {item.title} <button onClick={handleDelete}>Delete</button>
            <ConfirmDelete isDialogOpen={isDialogOpen} />
          </li>
        ))}
    </div>
  );
};

export default ListRender;
