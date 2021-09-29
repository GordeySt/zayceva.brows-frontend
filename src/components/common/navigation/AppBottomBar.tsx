import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../../common/constants/AdaptiveConstants";
import { menuItems, icons } from "./utils/menuItems";
import { HelpOutline } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {
  ABOUT_ROUTE,
  SETTINGS_MENU_ROUTE,
} from "../../../common/constants/RoutesConstants";

const useStyles = makeStyles((theme: Theme) => ({
  bottomBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 999,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      display: "none",
    },
  },
}));

const AppBottomBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.bottomBar}>
      <BottomNavigation showLabels value={0}>
        {menuItems.slice(2, 5).map(({ label, icon }) => {
          const Icon = icons[icon];

          return (
            <BottomNavigationAction
              onClick={() => history.push(SETTINGS_MENU_ROUTE)}
              label={label}
              icon={<Icon />}
            />
          );
        })}
        <BottomNavigationAction
          onClick={() => history.push(ABOUT_ROUTE)}
          label="Обо мне"
          icon={<HelpOutline />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default AppBottomBar;