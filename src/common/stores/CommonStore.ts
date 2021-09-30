import { PaletteMode, ThemeOptions } from "@mui/material";
import { makeAutoObservable } from "mobx";
import {
  BACKGROUND_COLORS_DEFAULT,
  BACKGROUND_COLORS_PAPER,
  PaletteType,
  THEME_PRIMARY_COLORS,
  THEME_TEXT_COLORS,
} from "../constants/ThemeConstants";
import { UserSettings } from "../types/UserSettings";
import { setUserSettingsToLocalStorage } from "../utils/localStorageUtils";

export default class CommonStore {
  userSettings = {
    themeType: "light",
  } as UserSettings;
  appBarTitle = "";
  showMobileMenu = true;
  showGoBackButton = false;

  constructor() {
    makeAutoObservable(this);
  }

  get storeTheme(): ThemeOptions {
    return {
      palette: {
        mode: this.userSettings.themeType as PaletteMode,
        text: THEME_TEXT_COLORS[this.userSettings.themeType as PaletteType],
        background: {
          default:
            BACKGROUND_COLORS_DEFAULT[
              this.userSettings.themeType as PaletteType
            ],
          paper:
            BACKGROUND_COLORS_PAPER[this.userSettings.themeType as PaletteType],
        },
        primary:
          THEME_PRIMARY_COLORS[this.userSettings.themeType as PaletteType],
      },
    };
  }

  setShowGoBackButton = (showGoBackButton: boolean) => {
    this.showGoBackButton = showGoBackButton;
  };

  setAppBarTitle = (appBarTitle: string) => {
    this.appBarTitle = appBarTitle;
  };

  setUserSettings = (userThemeSettings: UserSettings) => {
    this.userSettings = userThemeSettings;
  };

  setShowMobileMenu = (showMobileMenu: boolean) => {
    this.showMobileMenu = showMobileMenu;
  };

  setUserSettingsToLocalStorage = (userSettings: UserSettings) => {
    this.userSettings = userSettings;
    setUserSettingsToLocalStorage(userSettings);
  };
}
