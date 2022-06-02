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
  label: string;
  icon: keyof typeof icons;
  to: string;
}

export const menuItems: IMenuItem[] = [
  {
    label: "Войти",
    icon: "ExitToApp",
    to: LOGIN_ROUTE,
  },
  {
    label: "Профиль",
    icon: "PermIdentity",
    to: "/",
  },
  {
    label: "Услуги",
    icon: "ListAlt",
    to: "",
  },
  {
    label: "Советы",
    icon: "Book",
    to: "",
  },
  {
    label: "Настройки",
    icon: "Settings",
    to: SETTINGS_MENU_ROUTE,
  },
  {
    label: "Обо мне",
    icon: "HelpOutline",
    to: ABOUT_ROUTE
  }
];
