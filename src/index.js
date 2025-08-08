import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./components/product";
import LibraryScreen from "./screens/LibraryScreen";
import TodoListScreen from "./screens/TodoList.Screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginScreen from "./screens/Login/Login.screnns";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element="Trang chủ" />
        <Route path="books" element={<LibraryScreen />} />
        <Route path="todos" element={<TodoListScreen />} />
        <Route path="products" element={<ProductList />} />
      </Routes>
    </BrowserRouter> */}

    <LoginScreen />
  </React.StrictMode>
);

reportWebVitals();
