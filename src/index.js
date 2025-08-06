import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./components/product";
import LibraryScreen from "./screens/LibraryScreen";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ProductList /> */}
    <LibraryScreen />
  </React.StrictMode>
);

reportWebVitals();
