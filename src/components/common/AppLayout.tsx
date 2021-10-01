import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import AppTopBar from "./navigation/AppTopBar";
import SidebarDrawer, { DrawerHeader } from "./navigation/SidebarDrawer";
import { Children, useState } from "react";
import AppBottomBar from "./navigation/AppBottomBar";
import ModalContainer from "./ModalContainer";

const AppLayout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ModalContainer />
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

export default AppLayout;
