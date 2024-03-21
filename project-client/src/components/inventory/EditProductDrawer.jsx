import * as React from 'react';
import { Box, Drawer } from '../../ui';

export const EditProductDrawer = ({ open, onClose }) => {

  const list =  (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      
    >
      Edit Here
    </Box>
  );

  return (
    <div>
      <Drawer
      anchor="right"
      open={Boolean(open)}
      onClose={onClose}
    >
      {list}
    </Drawer>
    </div>
  );
}