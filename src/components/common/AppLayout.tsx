import CssBaseline from "@mui/material/CssBaseline";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import AppTopBar from "./navigation/AppTopBar";
import SidebarDrawer, { DrawerHeader } from "./navigation/SidebarDrawer";
import { Children, useState } from "react";
import AppBottomBar from "./navigation/AppBottomBar";
import ModalContainer from "./ModalContainer";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";

const AppLayout: React.FC = ({ children }) => {
  const theme = useTheme();
  const matchesTablets = useMediaQuery(theme.breakpoints.down(MAX_TABLET_WIDTH));
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
        {matchesTablets && <AppBottomBar />}
    </Box>
  );
};

export default AppLayout;
