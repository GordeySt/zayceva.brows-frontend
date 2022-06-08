import {
  PermIdentity,
  ListAlt,
  Book,
  Settings,
  ExitToApp,
  HelpOutline
} from "@material-ui/icons";
import { ABOUT_ROUTE, LOGIN_ROUTE, SETTINGS_MENU_ROUTE } from "../../../../common/constants/RoutesConstants";

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
    to: "",
  },
  {
    labelKey: "tipsMenuItemText",
    icon: "Book",
    to: "",
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
