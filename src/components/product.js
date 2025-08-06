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
    return Number(product.price) > 30;
  });

  const totalPrice = products.reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);

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
      <hr />
      <h3>Tổng tiền phải thanh toán {totalPrice}VNĐ</h3>
    </div>
  );
};
export default ProductList;
