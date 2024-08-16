import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Components/Main/Main";
import ProductPage from "../Components/ProductPage/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
