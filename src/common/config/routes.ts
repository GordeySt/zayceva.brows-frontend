import AboutPage from "../../pages/about-page/AboutPage";
import AppearancePage from "../../pages/settings-pages/AppearancePage";
import SettingsMenuPage from "../../pages/settings-pages/SettingsMenuPage";
import {
  ABOUT_ROUTE,
  APPEARANCE_SETTINGS_ROUTE,
  SETTINGS_MENU_ROUTE,
} from "../constants/RoutesConstants";

export type Route = {
  path: string | string[];
  component: () => JSX.Element;
  exact?: boolean;
};

export const routes: Route[] = [
  {
    path: SETTINGS_MENU_ROUTE,
    component: SettingsMenuPage,
    exact: true,
  },
  {
    path: APPEARANCE_SETTINGS_ROUTE,
    component: AppearancePage,
  },
  {
    path: ABOUT_ROUTE,
    component: AboutPage,
  },
];
