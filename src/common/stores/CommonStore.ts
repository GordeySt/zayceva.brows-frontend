import { ThemeOptions } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeAutoObservable } from "mobx";
import { USER_THEME_SETTINGS } from "../constants/localStorageConstants";

export interface IUserThemeSettings {
  isDarkMode: boolean;
}

export default class CommonStore {
  userThemeSettings = {
    isDarkMode: false,
  } as IUserThemeSettings;

  constructor() {
    makeAutoObservable(this);
  }

  get storeTheme(): ThemeOptions {
    return {
      palette: {
        type: this.userThemeSettings.isDarkMode ? "dark" : "light",
        primary: {
          main: this.userThemeSettings.isDarkMode ? blue["A100"] : blue["A400"],
        },
      },
    };
  }

  setUserThemeSettings = (userThemeSettings: IUserThemeSettings) => {
    this.userThemeSettings = userThemeSettings;
  };

  handleSetIsDarkMode = () => {
    this.userThemeSettings.isDarkMode = !this.userThemeSettings.isDarkMode;
    localStorage.setItem(
      USER_THEME_SETTINGS,
      JSON.stringify(this.userThemeSettings)
    );
  };
}
