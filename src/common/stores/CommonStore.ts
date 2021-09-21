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
