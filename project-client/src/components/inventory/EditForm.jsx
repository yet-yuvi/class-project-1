import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "../../ui";
import { ProductServices } from "../../services";

export const EditForm = ({ productRowData, onClose }) => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: productRowData.row.name,
    description: productRowData.row.description,
    price: productRowData.row.price,
    quantity: productRowData.row.quantity,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await ProductServices.editProduct(productRowData.row.id, formData);
      navigate("/products");
    } catch (error) {
      console.error("Failed to edit product:", error);
      alert("Failed to edit product!!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box py={10} justifyContent="center" alignItems="center">
      <Stack>
        <Link to="/products">
          <Button variant="contained">Back</Button>
        </Link>

        <form onSubmit={handleSubmit}>
          <Box justifyContent="center">
            <Stack spacing={2} py={4}>
              <Typography variant="subtitle1">Edit Product</Typography>
              <TextField
                required
                name="name"
                label="Name"
                variant="standard"
                onChange={handleChange}
                value={formData.name}
              />
              <TextField
                name="description"
                label="Description"
                variant="standard"
                onChange={handleChange}
                value={formData.description}
              />
              <TextField
                required
                name="price"
                label="Price"
                type="number"
                variant="standard"
                onChange={handleChange}
                value={formData.price}
              />
              <TextField
                required
                name="quantity"
                label="Quantity"
                type="number"
                variant="standard"
                onChange={handleChange}
                value={formData.quantity}
              />
              <Button disabled={isSubmitting} variant="outlined" type="submit">
                Confirm
              </Button>
              <Button onClick={onClose} variant="outlined" >Cancel</Button>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};
