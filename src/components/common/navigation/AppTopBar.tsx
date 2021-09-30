import { alpha, styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Typography,
  IconButton,
  Theme,
  AppBarProps as MuiAppBarProps,
  Box,
} from "@mui/material";
import { Menu, ArrowBack, HelpOutline } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../../common/constants/AdaptiveConstants";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../common/stores/Store";
import { useHistory } from "react-router-dom";
import { ABOUT_ROUTE } from "../../../common/constants/RoutesConstants";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: "55px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      width: "100%",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuIcon: {
    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      display: "none",
    },
  },
  backButton: {
    marginRight: "10px",
    display: "none",

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      display: "block",
      marginLeft: "-9px",
    },
  },
  appBarTitle: {
    fontFamily: "Google Sans",
  },
  appBarMenuItems: {
    display: "flex",
    marginRight: "-9px",
    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      display: "none",
    },
  },
  accountIcon: {
    color: alpha(theme.palette.text.primary, 0.7),
  },
}));

interface IProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const AppTopBar = observer(({ open, handleDrawerOpen }: IProps) => {
  const classes = useStyles();
  const history = useHistory();
  const {
    commonStore: { appBarTitle, showMobileMenu, showGoBackButton },
  } = useStore();

  return (
    <AppBar className={classes.appBar} position="fixed" open={open}>
      <Toolbar className={classes.toolbar}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            className={classes.menuIcon}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            style={{
              marginRight: "35px",
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            {showGoBackButton && (
              <IconButton
                onClick={() => history.goBack()}
                color="inherit"
                className={classes.backButton}
              >
                <ArrowBack />
              </IconButton>
            )}
            <Typography
              className={classes.appBarTitle}
              variant="h6"
              noWrap
              component="div"
            >
              {appBarTitle}
            </Typography>
          </div>
        </div>
        {showMobileMenu && (
          <Box className={classes.appBarMenuItems}>
            <IconButton onClick={() => history.push(ABOUT_ROUTE)} size="large">
              <HelpOutline className={classes.accountIcon} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default AppTopBar;
