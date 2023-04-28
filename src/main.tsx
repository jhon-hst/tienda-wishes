import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./Views/List";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Product from "./Views/Product";

const router = createBrowserRouter([
  {
    path: "/tienda-wishes/",
    element: <List />,
  },
  {
    path: "/tienda-wishes/product/:sku",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
