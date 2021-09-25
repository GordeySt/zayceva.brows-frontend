import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { AppTopBar } from "./navigation/AppTopBar";
import { DrawerHeader, SidebarDrawer } from "./navigation/SidebarDrawer";
import { LoginPage } from "../../pages/login-page/LoginPage";
import { DesktopModeSwitch } from "./modeSwitchers/DesktopModeSwitch";
import { useState } from "react";
import { AppBottomBar } from "./navigation/AppBottomBar";

export default function AppLayout() {
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
      <AppBottomBar />
      <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <DesktopModeSwitch />
        <LoginPage />
      </Box>
    </Box>
  );
}
