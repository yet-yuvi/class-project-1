import * as React from "react";
import { Box, Drawer } from "../../ui";
import { EditForm } from "./EditForm";

export const EditProductDrawer = ({
  open,
  onClose,
  productRowData,
}) => {
  const list = (
    <Box
      sx={{
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="presentation"
    >
      <EditForm productRowData={productRowData} onClose={onClose} />
    </Box>
  );

  return (
    <div>
      <Drawer 
      anchor="top" 
      open={Boolean(open)} 
      onClose={onClose}
      PaperProps={{ style: { justifyContent: "center", width: "20%",
      margin: "auto", } }}
      >
        {list}
      </Drawer>
    </div>
  );
};
