import {
  PermIdentity,
  ListAlt,
  Book,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import { SETTINGS_MENU_ROUTE } from "../../../../common/constants/RoutesConstants";

export const icons = {
  PermIdentity,
  ListAlt,
  Book,
  Settings,
  ExitToApp,
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
    to: "",
  },
  {
    label: "Профиль",
    icon: "PermIdentity",
    to: "",
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
];
