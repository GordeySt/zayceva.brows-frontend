import { alpha, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Palette,
  ArrowForwardIos,
  Collections,
  VisibilityOff,
} from "@material-ui/icons";
import { MAX_TABLET_WIDTH } from "../../common/constants/AdaptiveConstants";
import { Link } from "react-router-dom";
import { APPEARANCE_SETTINGS_ROUTE } from "../../common/constants/RoutesConstants";
import { useStore } from "../../common/stores/Store";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    cursor: "pointer",
    marginTop: theme.spacing(4),
    padding: "10px 0",

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      maxWidth: "100%",
      marginTop: theme.spacing(1.5),
    },

    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      borderRadius: "8px",
    },
  },
  link: {
    display: "flex",
    padding: theme.spacing(1.5, 2),
    textDecoration: "none",
    color: theme.palette.text.primary,
    alignItems: "center",
    "-webkit-tap-highlight-color": "transparent !important",
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.primary, 0.1),
    },
  },
  linkText: {
    marginLeft: theme.spacing(1.5),
    fontSize: 16,
    flexGrow: 1,
  },
  linkIcon: {
    color: theme.palette.primary.main,
    width: "28px",
    height: "28px",
  },
  linkIconChevronRight: {
    color: alpha(theme.palette.text.primary, 0.5),
    width: "18px",
    height: "18px",
  },
}));

const icons = {
  Palette,
  Collections,
  VisibilityOff,
};

interface IMenuItem {
  text: string;
  icon: keyof typeof icons;
}

const settingsMenuItems: IMenuItem[] = [
  {
    icon: "Palette",
    text: "Внешний вид",
  },
  {
    icon: "Collections",
    text: "Настройки интерфейса",
  },
  {
    icon: "VisibilityOff",
    text: "Черный список",
  },
];

const SettingsMenuPage = () => {
  const classes = useStyles();

  const {
    commonStore: { setAppBarTitle },
  } = useStore();

  useEffect(() => setAppBarTitle("Настройки"), [setAppBarTitle]);

  return (
    <div className={classes.root}>
      {settingsMenuItems.map(({ text, icon }, i) => {
        const Icon = icons[icon];

        return (
          <Link key={i} to={APPEARANCE_SETTINGS_ROUTE} className={classes.link}>
            <Icon className={classes.linkIcon} />
            <Typography className={classes.linkText}>{text}</Typography>
            <ArrowForwardIos className={classes.linkIconChevronRight} />
          </Link>
        );
      })}
    </div>
  );
};

export default SettingsMenuPage;
