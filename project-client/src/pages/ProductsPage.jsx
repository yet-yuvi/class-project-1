import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "../ui";

export const ProductsPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const routeToProductForm = () => navigate("/product-form");

  // Function to check if the current route is the product form route
  const isProductFormRoute = () => location.pathname === "/product-form";

  return (
    <Stack>
      {!isProductFormRoute() && (                  // conditional rendering
      <Box justifyContent="flex-end" px={2} py={2}>
        <Button variant="contained" size="medium" onClick={routeToProductForm}>
          Add Product
        </Button>
      </Box>
      )}
      <Outlet />
    </Stack>
  );
};