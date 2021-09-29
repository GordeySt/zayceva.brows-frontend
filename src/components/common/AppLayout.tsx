import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { AppTopBar } from "./navigation/AppTopBar";
import { DrawerHeader, SidebarDrawer } from "./navigation/SidebarDrawer";
import { Children, useState } from "react";
import { AppBottomBar } from "./navigation/AppBottomBar";

export const AppLayout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppTopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SidebarDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="div" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {Children.only(children)}
      </Box>
      <AppBottomBar />
    </Box>
  );
};
