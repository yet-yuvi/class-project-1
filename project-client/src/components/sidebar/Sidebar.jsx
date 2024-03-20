import * as React from "react";
import { useNavigate } from 'react-router-dom';

import {
  Box,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Drawer,
  IconButton,
  Tooltip,
} from "../../ui";

import {
  HomeIcon,
  ListAltIcon,
  StoreIcon,
  MenuIcon,
} from "../../icons";


export function Sidebar() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const handleRouteChange = (route) => {
    navigate(route.toLowerCase());
  }

  return (
    <div style={{ position: "absolute", top: 15, left: 15 }}>
      <IconButton
        onClick={toggleDrawer(!open)}
        color="inherit"
        aria-label="menu"
        sx={{
          bgcolor: "#1976d2",
          "&:hover": {
            "& .MuiSvgIcon-root": {
              color: "#00000087",
            },
          },
        }}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": { width: '90', bgcolor: "#1976d2" },
        }}
      >
        <Box
          sx={{ width: '80' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {[
              { text: "Home", icon: <HomeIcon sx={{ color: "white" }} />, tooltip: "Home", route: '/' },
              { text: "Products", icon: <StoreIcon sx={{ color: "white" }} />, tooltip: "Products", route: '/products' },
              {
                text: "Inventory",
                icon: <ListAltIcon sx={{ color: "white" }} />,
                tooltip: "Inventory",
                route: '/inventory'
              },
            ].map((item) => (
              <Tooltip
                title={item.tooltip}
                key={item.text}
                arrow
                placement="right"
              >
                <ListItem button key={item.text} onClick={() => handleRouteChange(item.route)}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
