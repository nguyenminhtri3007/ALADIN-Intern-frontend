import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>

        <li>
          <Link to="books ">Quản lí thư viện</Link>
        </li>

        <li>
          <Link to="todos">Quản lí công việc</Link>
        </li>

        <li>
          <Link to="products">Quản lí sản phẩm</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
