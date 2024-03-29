import AboutPage from "../../pages/about-page/AboutPage";
import ConfirmEmailPage from "../../pages/confirm-email-page/ConfirmEmailPage";
import ConfirmedEmailPage from "../../pages/confirmed-email-page/ConfirmedEmailPage";
import LoginPage from "../../pages/login-page/LoginPage";
import AppearancePage from "../../pages/settings-pages/AppearancePage";
import BlackListPage from "../../pages/settings-pages/BlackListPage";
import LanguageSettingsPage from "../../pages/settings-pages/LanguageSettingsPage";
import SettingsMenuPage from "../../pages/settings-pages/SettingsMenuPage";
import SignUpPage from "../../pages/sign-up-page/SignUpPage";
import { TestPage } from "../../pages/TestPage";
import TipsPage from "../../pages/tips-page/TipsPage";
import {
  ABOUT_ROUTE,
  APPEARANCE_SETTINGS_ROUTE,
  BLACK_LIST_SETTINGS_ROUTE,
  CONFIRM_EMAIL_ROUTE,
  CONFIRMED_EMAIL_ROUTE,
  DEFAULT_ROUTE,
  LANGUAGE_SETTINGS_ROUTE,
  LOGIN_ROUTE,
  SERVICES_ROUTE,
  SERVICES_SCHEDULE_ROUTE,
  SETTINGS_MENU_ROUTE,
  SIGN_UP_ROUTE,
  TIPS_ROUTE,
  PROFILE_ROUTE,
} from "../constants/routesConstants";
import ServicesPage from "../../pages/services-page/ServicesPage";
import SchedulePage from "../../pages/schedule-page/SchedulePage";
import { Role } from "../models/user";
import NotFound from "../../components/common/NotFound";
import ProfilePage from "../../pages/profile-page/ProfilePage";

export type Route = {
  path?: string | string[];
  component: () => JSX.Element;
  showBottomBar?: boolean;
  showGoBackButton?: boolean;
  titleKey: string;
  exact?: boolean;
  roles?: string[];
  privateRoute?: boolean;
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
    titleKey: "pages.signInPage.pageTitle",
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignUpPage,
    titleKey: "pages.signUpPage.pageTitle",
    showGoBackButton: true,
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
    titleKey: "pages.languageSettingsPage.pageTitle",
  },
  {
    path: BLACK_LIST_SETTINGS_ROUTE,
    component: BlackListPage,
    showGoBackButton: true,
    titleKey: "pages.blacklistPage.pageTitle",
    privateRoute: true,
    roles: [Role.Admin],
  },
  {
    path: ABOUT_ROUTE,
    component: AboutPage,
    showGoBackButton: true,
    titleKey: "pages.aboutPage.pageTitle",
  },
  {
    path: CONFIRM_EMAIL_ROUTE,
    component: ConfirmEmailPage,
    showGoBackButton: true,
    titleKey: "pages.confirmEmailPage.pageTitle",
  },
  {
    path: CONFIRMED_EMAIL_ROUTE,
    component: ConfirmedEmailPage,
    titleKey: "",
  },
  {
    path: TIPS_ROUTE,
    component: TipsPage,
    titleKey: "menu.tipsMenuItemText",
    showBottomBar: true,
  },
  {
    path: SERVICES_ROUTE,
    component: ServicesPage,
    titleKey: "menu.servicesMenuItemText",
    showBottomBar: true,
    exact: true,
  },
  {
    path: SERVICES_SCHEDULE_ROUTE,
    component: SchedulePage,
    titleKey: "pages.schedulePage.pageTitle",
    showGoBackButton: true,
  },
  {
    path: PROFILE_ROUTE,
    component: ProfilePage,
    titleKey: "pages.profilePage.pageTitle",
  },
  {
    component: NotFound,
    titleKey: "",
    showGoBackButton: true,
  },
];
