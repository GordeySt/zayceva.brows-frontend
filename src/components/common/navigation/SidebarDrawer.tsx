import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@material-ui/core/Drawer";
import IconButton from "@mui/material/IconButton";
import { List, Divider, Typography } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookIcon from "@material-ui/icons/Book";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: "60px",
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface IStyleProps {
  isDarkMode: boolean;
  open: boolean;
}

const useStyles = makeStyles({
  drawerHeader: {
    position: "absolute",
    left: 20,
  },
  menuList: {
    color: "rgba(233,233,233,0.54)",
  },
  menuListItem: ({ open, isDarkMode }: IStyleProps) => ({
    color: isDarkMode ? "rgba(233, 233, 233, 0.54)" : "rgba(0, 0, 0, 0.54)",
    marginLeft: "5px",
    width: open ? "96%" : "85%",
    paddingLeft: "13px",
    borderRadius: "5px",
    "&:nth-child(1)": {
      background: isDarkMode
        ? "rgba(233, 233, 233, 0.1)"
        : "rgba(233, 233, 233, 0.8)",
      marginBottom: "20px",
      marginTop: "5px",
      color: isDarkMode ? "white" : "black",
      "&:hover": {
        background: isDarkMode ? "rgba(233, 233, 233, 0.2)" : "rgba(0,0,0,0.1)",
      },
    },
    "&:nth-child(n+2)": {
      "&:hover": {
        background: "transparent",
        color: isDarkMode ? "white" : "black",
      },
    },
  }),
  menuListItemIcon: {
    marginRight: "-13px",
  },
  divider: {
    width: "90%",
    margin: "0 auto",
  },
});

interface IProps {
  open: boolean;
  isDarkMode: boolean;
  handleDrawerClose: () => void;
}

export const SidebarDrawer = ({
  open,
  isDarkMode,
  handleDrawerClose,
}: IProps) => {
  const classes = useStyles({ isDarkMode, open });

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ minHeight: "55px" }}>
        <Typography className={classes.drawerHeader}>zayceva.brows</Typography>
        <IconButton onClick={handleDrawerClose}>
          <KeyboardArrowLeftIcon htmlColor={isDarkMode ? "white" : "black"} />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List className={classes.menuList}>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon className={classes.menuListItemIcon}>
            <ExitToAppIcon
              fontSize="medium"
              color={open ? "primary" : "inherit"}
            />
          </ListItemIcon>
          <ListItemText primary="Войти" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon className={classes.menuListItemIcon}>
            <PermIdentityIcon
              fontSize="medium"
              color={open ? "primary" : "inherit"}
            />
          </ListItemIcon>
          <ListItemText primary="Профиль" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon className={classes.menuListItemIcon}>
            <ListAltIcon
              fontSize="medium"
              color={open ? "primary" : "inherit"}
            />
          </ListItemIcon>
          <ListItemText primary="Услуги" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon className={classes.menuListItemIcon}>
            <BookIcon fontSize="medium" color={open ? "primary" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Советы" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon className={classes.menuListItemIcon}>
            <SettingsIcon
              fontSize="medium"
              color={open ? "primary" : "inherit"}
            />
          </ListItemIcon>
          <ListItemText primary="Настройки" />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider className={classes.divider} />
        <ListItem
          style={{
            color: isDarkMode ? "rgba(233,233,233,0.54)" : "rgba(0,0,0,0.54)",
            cursor: "pointer",
          }}
        >
          <ListItemIcon className={classes.menuListItemIcon}>
            <HelpOutlineIcon
              fontSize="medium"
              htmlColor={
                isDarkMode ? "rgba(233,233,233,0.54)" : "rgba(0,0,0,0.54)"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Обо мне" />
        </ListItem>
      </List>
    </Drawer>
  );
};
