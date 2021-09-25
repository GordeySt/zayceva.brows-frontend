import { styled } from "@mui/material/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import {
  Toolbar,
  Typography,
  AppBarProps as MuiAppBarProps,
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { IStyleProps } from "../../../App";
import MenuIcon from "@material-ui/icons/Menu";

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

const useStyles = makeStyles({
  appBar: ({ isDarkMode }: IStyleProps) => ({
    height: "55px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: isDarkMode ? "#2b2a2a" : grey["100"],
    color: isDarkMode ? "white" : "#0e0e0e",
  }),
  appBarTitle: {
    fontFamily: "serif",
  },
});

interface IProps {
  isDarkMode: boolean;
  open: boolean;
  handleDrawerOpen: () => void;
}

export const AppTopBar = ({ isDarkMode, open, handleDrawerOpen }: IProps) => {
  const classes = useStyles({ isDarkMode });

  return (
    <AppBar className={classes.appBar} position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
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
