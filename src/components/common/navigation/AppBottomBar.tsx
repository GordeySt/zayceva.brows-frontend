import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Theme,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../../common/constants/adaptiveConstants";
import { menuItems, icons } from "./utils/menuItems";
import { useHistory, useLocation } from "react-router-dom";
import { useRoute } from "../../../common/utils/routeUtils";
import { useTranslation } from "react-i18next";

interface IStyleProps {
  showBottomBar?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  bottomBar: ({ showBottomBar }: IStyleProps) => ({
    display: showBottomBar ? "block" : "none",
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

const AppBottomBar = () => {
  const route = useRoute();
  const showBottomBar = route?.showBottomBar;
  const classes = useStyles({ showBottomBar });
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box className={classes.bottomBar}>
      <BottomNavigation showLabels>
        {menuItems.slice(2, 6).map(({ labelKey, icon, to }, i) => {
          const Icon = icons[icon];

          return (
            <BottomNavigationAction
              key={i}
              onClick={() => history.push(to)}
              label={t(`menu.${labelKey}`)}
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
};

export default AppBottomBar;
