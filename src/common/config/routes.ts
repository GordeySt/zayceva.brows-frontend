import AboutPage from "../../pages/about-page/AboutPage";
import AppearancePage from "../../pages/settings-pages/AppearancePage";
import SettingsMenuPage from "../../pages/settings-pages/SettingsMenuPage";
import { TestPage } from "../../pages/TestPage";
import {
  ABOUT_ROUTE,
  APPEARANCE_SETTINGS_ROUTE,
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
    path: "/",
    component: TestPage,
    title: "zayceva.brows",
    showBottomBar: true,
    exact: true,
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
    path: ABOUT_ROUTE,
    component: AboutPage,
    showGoBackButton: true,
    title: "Обо мне",
  },
];
