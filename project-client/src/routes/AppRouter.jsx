import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, ProductsPage, InventoryPage } from "../pages";
import { ProductForm, Products } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...['/', 'products'].map((path) => ({
        path,
        element: <ProductsPage />,
        children: [
            {
                index: 'true',
                element: <Products />,
            },
            {
                path: 'product-form',
                element: <ProductForm />,
            }
        ],
      })),
      {
        path: "inventory",
        element: <InventoryPage />,
      },
    ],
  }
]);

export const AppRouterProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
