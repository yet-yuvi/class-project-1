import React from "react";
import { Box, Button, Stack, Typography, TextField } from "../../ui";
import { Link, useNavigate } from "react-router-dom";
import { ProductServices } from "../../services";

export const ProductForm = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) =>
    setProduct({ ...product, [`${e.target.name}`]: e.target.value });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      // Reset the field value to 0 if it's left empty
      setProduct({ ...product, [name]: 0 });
    }
  };

  const handleFocus = (e) => {
    const { name, value } = e.target;
    if (value === "0") {
      // Clear the field value only if it's the default value of 0
      setProduct({ ...product, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await ProductServices.createProduct(product);
      navigate("/products");
    } catch (error) {
      alert("Failed to create product!!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box py={10} justifyContent="center">
      <Stack>
        <Link to="/products">
          <Button variant="contained">Back</Button>
        </Link>

        <form onSubmit={handleSubmit}>
          <Box justifyContent="center">
            <Stack spacing={2} py={4}>
              <Typography variant="subtitle1">Add Product</Typography>
              <TextField
                required
                name="name"
                label="Name"
                variant="standard"
                onChange={handleChange}
                value={product.name}
              />
              <TextField
                name="description"
                label="Description"
                variant="standard"
                onChange={handleChange}
                value={product.description}
              />
              <TextField
                required
                name="price"
                label="Price"
                type="number"
                variant="standard"
                onChange={handleChange}
                value={product.price}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <TextField
                required
                name="quantity"
                label="Quantity"
                type="number"
                variant="standard"
                onChange={handleChange}
                value={product.quantity}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <Button disabled={isSubmitting} variant="outlined" type="submit">
                Add
              </Button>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};
