import AboutPage from "../../pages/about-page/AboutPage";
import LoginPage from "../../pages/login-page/LoginPage";
import AppearancePage from "../../pages/settings-pages/AppearancePage";
import BlackListPage from "../../pages/settings-pages/BlackListPage";
import LanguageSettingsPage from "../../pages/settings-pages/LanguageSettingsPage";
import SettingsMenuPage from "../../pages/settings-pages/SettingsMenuPage";
import SignUpPage from "../../pages/sign-up-page/SignUpPage";
import { TestPage } from "../../pages/TestPage";
import {
  ABOUT_ROUTE,
  APPEARANCE_SETTINGS_ROUTE,
  BLACK_LIST_SETTINGS_ROUTE,
  DEFAULT_ROUTE,
  LANGUAGE_SETTINGS_ROUTE,
  LOGIN_ROUTE,
  SETTINGS_MENU_ROUTE,
  SIGN_UP_ROUTE,
} from "../constants/RoutesConstants";

export type Route = {
  path: string | string[];
  component: () => JSX.Element;
  showBottomBar?: boolean;
  showGoBackButton?: boolean;
  titleKey: string;
  exact?: boolean;
};

export const routes: Route[] = [
  {
    path: DEFAULT_ROUTE,
    component: TestPage,
    titleKey: "zayceva.brows",
    showBottomBar: true,
    exact: true,
  },
  {
    path: LOGIN_ROUTE,
    component: LoginPage,
    showBottomBar: true,
    titleKey: "pages.signInPage.pageTitle"
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignUpPage,
    titleKey: "pages.signUpPage.pageTitle",
    showBottomBar: true
  },
  {
    path: SETTINGS_MENU_ROUTE,
    component: SettingsMenuPage,
    showBottomBar: true,
    exact: true,
    titleKey: "pages.settingsMenu.pageTitle",
  },
  {
    path: APPEARANCE_SETTINGS_ROUTE,
    component: AppearancePage,
    showGoBackButton: true,
    titleKey: "pages.appearanceSettingsPage.pageTitle",
  },
  {
    path: LANGUAGE_SETTINGS_ROUTE,
    component: LanguageSettingsPage,
    showGoBackButton: true,
    titleKey: "pages.languageSettingsPage.pageTitle"
  },
  {
    path: BLACK_LIST_SETTINGS_ROUTE,
    component: BlackListPage,
    showGoBackButton: true,
    titleKey: "pages.blacklistPage.pageTitle",
  },
  {
    path: ABOUT_ROUTE,
    component: AboutPage,
    showGoBackButton: true,
    titleKey: "pages.aboutPage.pageTitle",
  },
];
