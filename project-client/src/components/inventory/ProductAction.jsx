import React from "react";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "../../ui";
import { EditIcon, DeleteIcon } from "../../icons";
import { ProductServices } from "../../services";

export const ProductActions = ({ productRowData }) => {
  const [productToDelete, setProductToDelete] = React.useState(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  console.log();

  const onCloseDeleteModal = () => setProductToDelete(null);

  const onConfirmProductDelete = () => {
    setIsDeleting(true);
    ProductServices.deleteProduct(productToDelete)
      .then(() => window.location.reload())
      .catch((err) => {
        console.error(err);
        alert("Failed to delete");
      })
      .finally(() => {
        setIsDeleting(false);
        onCloseDeleteModal();
      });
  };

  return (
    <Box>
      <IconButton>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => setProductToDelete(productRowData.row.id)}>
        <DeleteIcon />
      </IconButton>

      <Dialog open={Boolean(productToDelete)} onClose={onCloseDeleteModal}>
        <DialogTitle>{`Delete ${productRowData.row.name}`}</DialogTitle>
        <DialogContent>
          Are you sure? This action can not be reverted.
        </DialogContent>
        <DialogActions>
          <Button
            disabled={isDeleting}
            color="error"
            variant="outlined"
            onClick={onConfirmProductDelete}
          >
            Yes, Delete
          </Button>
          <Button variant="contained" onClick={onCloseDeleteModal} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
