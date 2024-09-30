import { useState } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProductItem = styled.div`
  width: 300px;
  height: 160px;
  padding: 12px;
  border: 1px solid #e9e9e9;
  background: #e9e9e9;
`;

const EditList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple iPhone 16 Pro Max 256 GB",
      price: 135000,
    },
    {
      id: 2,
      name: "Apple iPhone 16 Pro 256 GB",
      price: 115000,
    },
    {
      id: 3,
      name: "Apple iPhone 16 256 GB",
      price: 75000,
    },
    {
      id: 4,
      name: "Apple iPhone 16 128 GB",
      price: 65000,
    },
  ]);
  const [editing, setEditing] = useState({});

  const onEditProduct = (data) => {
    console.log("Data: ", data);
    setEditing(data);
  };

  const onInputEditingProduct = (e) => {
    const { name, value } = e.target;
    setEditing((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onUpdateProduct = () => {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === editing.id) {
          //item.name = editing.name;
          //item.price = editing.price;
          item = { ...editing };
        }

        return item;
      });
    });
    setEditing({});
  };

  return (
    <div>
      <h1>My Products</h1>
      <ProductContainer>
        {/* <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}> */}
        {products.map((product) => {
          return (
            <ProductItem key={product.id}>
              {product.id === editing.id ? (
                <>
                  <div className="form-elements">
                    <input
                      type="text"
                      name="name"
                      value={editing.name}
                      onChange={onInputEditingProduct}
                    />
                  </div>
                  <div className="form-elements">
                    <input
                      type="text"
                      name="price"
                      value={editing.price}
                      onChange={onInputEditingProduct}
                    />
                  </div>
                  <button onClick={onUpdateProduct}>Update</button>
                </>
              ) : (
                <>
                  <p className="title">{product.name}</p>
                  <p className="price">{product.price}</p>
                  <button onClick={() => onEditProduct(product)}>Edit</button>
                </>
              )}
            </ProductItem>
          );
        })}
        {/* </div> */}
      </ProductContainer>
    </div>
  );
};

export default EditList;
