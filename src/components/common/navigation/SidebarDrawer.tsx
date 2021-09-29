import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  List,
  Divider,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { KeyboardArrowLeft, HelpOutline } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import { icons, menuItems } from "./utils/menuItems";
import { alpha } from "@mui/material";
import { MAX_TABLET_WIDTH } from "../../../common/constants/AdaptiveConstants";
import { useHistory, useLocation } from "react-router-dom";
import { ABOUT_ROUTE } from "../../../common/constants/RoutesConstants";

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
  [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
    display: "none",
  },
}));

interface IStyleProps {
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  drawerHeader: {
    position: "absolute",
    left: 20,
  },
  menuList: {
    color: theme.palette.text.secondary,
  },
  menuListItem: ({ open }: IStyleProps) => ({
    color: theme.palette.text.secondary,
    marginLeft: "5px",
    width: open ? "96%" : "85%",
    paddingLeft: "13px",
    borderRadius: "5px",

    "&:nth-child(1)": {
      background: alpha(theme.palette.text.primary, 0.1),
      marginBottom: "20px",
      marginTop: "5px",
      color: theme.palette.text.primary,
      "&:hover": {
        background: alpha(theme.palette.text.primary, 0.2),
      },
    },

    "&:nth-child(n+2)": {
      "&:hover": {
        background: "transparent",
        color: alpha(theme.palette.text.primary, 0.75),
      },
    },
  }),
  active: {
    background: alpha(theme.palette.text.primary, 0.1),
    color: theme.palette.text.primary + " !important",

    "&:hover": {
      background: alpha(theme.palette.text.primary, 0.1) + " !important",
      color: theme.palette.text.primary + " !important",
    },
  },
  menuListItemIcon: {
    marginRight: "-13px",
  },
  menuIcon: ({ open }: IStyleProps) => ({
    color: open
      ? theme.palette.primary.main
      : alpha(theme.palette.text.primary, 0.7),
  }),
  helpItem: {
    color: alpha(theme.palette.text.primary, 0.54),
    cursor: "pointer",

    "&:hover": {
      background: "none",
    },
  },
  helpIcon: {
    color: alpha(theme.palette.text.primary, 0.54),
  },
  divider: {
    width: "90%",
    margin: "0 auto",
  },
}));

interface IProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const SidebarDrawer = ({ open, handleDrawerClose }: IProps) => {
  const history = useHistory();
  const classes = useStyles({ open });
  const location = useLocation();

  console.log(location);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ minHeight: "55px" }}>
        <Typography className={classes.drawerHeader}>zayceva.brows</Typography>
        <IconButton onClick={handleDrawerClose}>
          <KeyboardArrowLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List className={classes.menuList}>
        {menuItems.map(({ label, icon, to }) => {
          const Icon = icons[icon];

          return (
            <ListItem
              button
              onClick={() => history.push(to)}
              className={
                classes.menuListItem +
                (location.pathname === to ? " " + classes.active : "")
              }
            >
              <ListItemIcon className={classes.menuListItemIcon}>
                <Icon className={classes.menuIcon} fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          );
        })}
      </List>
      <Divider className={classes.divider} />
      <List style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider className={classes.divider} />
        <ListItem
          disableRipple
          button
          onClick={() => history.push(ABOUT_ROUTE)}
          className={classes.helpItem}
        >
          <ListItemIcon className={classes.menuListItemIcon}>
            <HelpOutline fontSize="medium" className={classes.helpIcon} />
          </ListItemIcon>
          <ListItemText primary="Обо мне" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarDrawer;
