import {
  PermIdentity,
  ListAlt,
  Book,
  Settings,
  ExitToApp,
  HelpOutline
} from "@mui/icons-material";
import {
  ABOUT_ROUTE,
  LOGIN_ROUTE,
  SERVICES_ROUTE,
  SETTINGS_MENU_ROUTE,
  TIPS_ROUTE
} from "../../../../common/constants/routesConstants";

export const icons = {
  PermIdentity,
  ListAlt,
  Book,
  Settings,
  ExitToApp,
  HelpOutline
};

interface IMenuItem {
  labelKey: string;
  icon: keyof typeof icons;
  to: string;
}

export const menuItems: IMenuItem[] = [
  {
    labelKey: "signInMenuItemText",
    icon: "ExitToApp",
    to: LOGIN_ROUTE,
  },
  {
    labelKey: "profileMenuItemText",
    icon: "PermIdentity",
    to: "/",
  },
  {
    labelKey: "servicesMenuItemText",
    icon: "ListAlt",
    to: SERVICES_ROUTE,
  },
  {
    labelKey: "tipsMenuItemText",
    icon: "Book",
    to: TIPS_ROUTE,
  },
  {
    labelKey: "settingsMenuItemText",
    icon: "Settings",
    to: SETTINGS_MENU_ROUTE,
  },
  {
    labelKey: "aboutMenuItemText",
    icon: "HelpOutline",
    to: ABOUT_ROUTE
  }
];
