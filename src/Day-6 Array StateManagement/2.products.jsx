import { useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
      {
        id: 5,
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
  ]);

  return (
    <div>
      <h1>My Products</h1>
      {productList.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: "#e9e9e9",
              padding: 12,
              margin: 12,
              width: "200px",
              height: "200px",
            }}
          >
            <img src={item.image} height={80} width={80} />
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
