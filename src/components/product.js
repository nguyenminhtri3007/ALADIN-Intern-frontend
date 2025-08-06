import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "banana", price: "42" },
    { id: 2, name: "orange", price: "24" },
    { id: 3, name: "apple", price: "28" },
    { id: 4, name: "xoài", price: "33" },
  ];

  const uperProduct = products.map((product) => {
    return {
      name: product.name.toUpperCase(),
    };
  });

  const filterProduct = products.filter((product) => {
    return product.price > 30;
  });
  return (
    <div>
      <h3>Danh sách mới</h3>
      <ul>
        {uperProduct.map((product) => {
          return (
            <li key={product.id}>
              {product.name}-{product.price}VNĐ
            </li>
          );
        })}
      </ul>
      <hr />
      <h3>Danh sách giá lớn hơn 30</h3>
      {filterProduct.map((products) => {
        return (
          <li key={products.id}>
            {products.name}- {products.price}$
          </li>
        );
      })}
    </div>
  );
};
export default ProductList;
