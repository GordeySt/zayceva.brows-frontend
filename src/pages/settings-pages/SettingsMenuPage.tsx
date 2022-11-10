import { alpha, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Palette,
  ArrowForwardIos,
  Language,
  VisibilityOff,
} from "@mui/icons-material";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";
import { Link } from "react-router-dom";
import {
  APPEARANCE_SETTINGS_ROUTE,
  BLACK_LIST_SETTINGS_ROUTE,
  LANGUAGE_SETTINGS_ROUTE,
} from "../../common/constants/routesConstants";
import { useTranslation } from "react-i18next";
import { useStore } from "../../common/stores/Store";

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
  Language,
  VisibilityOff,
};

interface IMenuItem {
  icon: keyof typeof icons;
  textKey: string;
  to: string;
  isVisible: boolean;
}

const createMenuItems = (
  isLoggedIn: boolean,
  isAdmin: boolean
): IMenuItem[] => [
  {
    icon: "Palette",
    textKey: "appearanceSettingsMenuItem",
    to: APPEARANCE_SETTINGS_ROUTE,
    isVisible: true,
  },
  {
    icon: "Language",
    textKey: "languageSettingsMenuItem",
    to: LANGUAGE_SETTINGS_ROUTE,
    isVisible: true,
  },
  {
    icon: "VisibilityOff",
    textKey: "blacklistSettingsMenuItem",
    to: BLACK_LIST_SETTINGS_ROUTE,
    isVisible: isLoggedIn && isAdmin,
  },
];

const SettingsMenuPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    authStore: { isLoggedIn, isAdminRole },
  } = useStore();

  return (
    <div className={classes.root}>
      {createMenuItems(isLoggedIn, isAdminRole).map(
        ({ textKey, icon, to, isVisible }, i) => {
          const Icon = icons[icon];

          return (
            <>
              {isVisible && (
                <Link key={i} to={to} className={classes.link}>
                  <Icon className={classes.linkIcon} />
                  <Typography className={classes.linkText}>
                    {t(`pages.settingsMenu.${textKey}`)}
                  </Typography>
                  <ArrowForwardIos className={classes.linkIconChevronRight} />
                </Link>
              )}
            </>
          );
        }
      )}
    </div>
  );
};

export default SettingsMenuPage;
