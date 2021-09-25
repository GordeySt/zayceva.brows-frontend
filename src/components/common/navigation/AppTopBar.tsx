import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Typography,
  IconButton,
  Theme,
  AppBarProps as MuiAppBarProps,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../../common/constants/adaptiveConstants";

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
    paddingLeft: "18px",
  },
  menuIcon: {
    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      display: "none",
    },
  },
  appBarTitle: {
    fontFamily: "serif",
  },
}));

interface IProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

export const AppTopBar = ({ open, handleDrawerOpen }: IProps) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed" open={open}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuIcon}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          style={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          className={classes.appBarTitle}
          variant="h6"
          noWrap
          component="div"
        >
          Авторизация
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
