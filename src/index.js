import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./components/product";
import LibraryScreen from "./screens/LibraryScreen";
import TodoListScreen from "./screens/TodoList.Screen";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ProductList /> */}
    {/* <LibraryScreen /> */}
    <TodoListScreen />
  </React.StrictMode>
);

reportWebVitals();
