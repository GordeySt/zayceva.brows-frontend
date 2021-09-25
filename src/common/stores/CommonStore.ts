import { ThemeOptions } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
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
        mode: this.userThemeSettings.isDarkMode ? "dark" : "light",
        text: {
          primary: this.userThemeSettings.isDarkMode ? "#fff" : "#000",
        },
        background: {
          default: this.userThemeSettings.isDarkMode ? "#0e0e0e" : grey["100"],
        },
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
