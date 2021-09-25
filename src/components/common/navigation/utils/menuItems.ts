import {
  PermIdentity,
  ListAlt,
  Book,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

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
}

export const menuItems: IMenuItem[] = [
  {
    label: "Войти",
    icon: "ExitToApp",
  },
  {
    label: "Профиль",
    icon: "PermIdentity",
  },
  {
    label: "Услуги",
    icon: "ListAlt",
  },
  {
    label: "Советы",
    icon: "Book",
  },
  {
    label: "Настройки",
    icon: "Settings",
  },
];
