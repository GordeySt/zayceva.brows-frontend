import AboutPage from "../../pages/about-page/AboutPage";
import LoginPage from "../../pages/login-page/LoginPage";
import AppearancePage from "../../pages/settings-pages/AppearancePage";
import BlackListPage from "../../pages/settings-pages/BlackListPage";
import LanguageSettingsPage from "../../pages/settings-pages/LanguageSettingsPage";
import SettingsMenuPage from "../../pages/settings-pages/SettingsMenuPage";
import { TestPage } from "../../pages/TestPage";
import {
  ABOUT_ROUTE,
  APPEARANCE_SETTINGS_ROUTE,
  BLACK_LIST_SETTINGS_ROUTE,
  DEFAULT_ROUTE,
  LANGUAGE_SETTINGS_ROUTE,
  LOGIN_ROUTE,
  SETTINGS_MENU_ROUTE,
} from "../constants/RoutesConstants";

export type Route = {
  path: string | string[];
  component: () => JSX.Element;
  showBottomBar?: boolean;
  showGoBackButton?: boolean;
  title: string;
  exact?: boolean;
};

export const routes: Route[] = [
  {
    path: DEFAULT_ROUTE,
    component: TestPage,
    title: "zayceva.brows",
    showBottomBar: true,
    exact: true,
  },
  {
    path: LOGIN_ROUTE,
    component: LoginPage,
    showBottomBar: true,
    title: "Войти в приложение"
  },
  {
    path: SETTINGS_MENU_ROUTE,
    component: SettingsMenuPage,
    showBottomBar: true,
    exact: true,
    title: "Настройки",
  },
  {
    path: APPEARANCE_SETTINGS_ROUTE,
    component: AppearancePage,
    showGoBackButton: true,
    title: "Внешний вид",
  },
  {
    path: LANGUAGE_SETTINGS_ROUTE,
    component: LanguageSettingsPage,
    showGoBackButton: true,
    title: "Настройки языка"
  },
  {
    path: BLACK_LIST_SETTINGS_ROUTE,
    component: BlackListPage,
    showGoBackButton: true,
    title: "Черный список",
  },
  {
    path: ABOUT_ROUTE,
    component: AboutPage,
    showGoBackButton: true,
    title: "Обо мне",
  },
];
