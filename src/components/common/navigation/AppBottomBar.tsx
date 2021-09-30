import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Theme,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../../common/constants/AdaptiveConstants";
import { menuItems, icons } from "./utils/menuItems";
import { useHistory, useLocation } from "react-router-dom";
import { SETTINGS_MENU_ROUTE } from "../../../common/constants/RoutesConstants";
import { useStore } from "../../../common/stores/Store";
import { observer } from "mobx-react-lite";

interface IStyleProps {
  showMobileMenu: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  bottomBar: ({ showMobileMenu }: IStyleProps) => ({
    display: showMobileMenu ? "block" : "none",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 999,
    background: theme.palette.background.default,
    paddingBottom: "env(safe-area-inset-bottom, 0)",
    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      display: "none",
    },
  }),
}));

const AppBottomBar = observer(() => {
  const {
    commonStore: { showMobileMenu },
  } = useStore();
  const classes = useStyles({ showMobileMenu });
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();

  return (
    <Box className={classes.bottomBar}>
      <BottomNavigation showLabels>
        {menuItems.slice(1, 5).map(({ label, icon, to }, i) => {
          const Icon = icons[icon];

          return (
            <BottomNavigationAction
              key={i}
              onClick={() => history.push(SETTINGS_MENU_ROUTE)}
              label={label}
              icon={
                <Icon
                  style={{
                    color:
                      location.pathname === to
                        ? theme.palette.primary.main
                        : "",
                  }}
                />
              }
            />
          );
        })}
      </BottomNavigation>
    </Box>
  );
});

export default AppBottomBar;
