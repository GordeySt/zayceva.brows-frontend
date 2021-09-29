import { PaletteMode, ThemeOptions } from "@mui/material";
import { makeAutoObservable } from "mobx";
import { USER_THEME_SETTINGS } from "../constants/localStorageConstants";
import {
  BACKGROUND_COLORS_DEFAULT,
  BACKGROUND_COLORS_PAPER,
  PaletteType,
  THEME_PRIMARY_COLORS,
  THEME_TEXT_COLORS,
} from "../constants/themeConstants";
import { UserThemeSettings } from "../types/UserSettings";

export default class CommonStore {
  userThemeSettings = {
    themeType: "light",
  } as UserThemeSettings;

  constructor() {
    makeAutoObservable(this);
  }

  get storeTheme(): ThemeOptions {
    return {
      palette: {
        mode: this.userThemeSettings.themeType as PaletteMode,
        text: THEME_TEXT_COLORS[
          this.userThemeSettings.themeType as PaletteType
        ],
        background: {
          default:
            BACKGROUND_COLORS_DEFAULT[
              this.userThemeSettings.themeType as PaletteType
            ],
          paper:
            BACKGROUND_COLORS_PAPER[
              this.userThemeSettings.themeType as PaletteType
            ],
        },
        primary:
          THEME_PRIMARY_COLORS[this.userThemeSettings.themeType as PaletteType],
      },
    };
  }

  setUserThemeSettings = (userThemeSettings: UserThemeSettings) => {
    this.userThemeSettings = userThemeSettings;
  };

  setUserThemeType = (themeType: string) => {
    this.userThemeSettings.themeType = themeType;
    localStorage.setItem(
      USER_THEME_SETTINGS,
      JSON.stringify(this.userThemeSettings)
    );
  };
}
