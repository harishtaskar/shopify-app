import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Product from "./pages/products/Product";
import NewProduct from "./pages/products/NewProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "products",
          element: <Product />,
          children: [{ path: "new", element: <NewProduct /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
