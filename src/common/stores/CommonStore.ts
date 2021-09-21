import { makeAutoObservable } from "mobx";

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
      "userThemeSettings",
      JSON.stringify(this.userThemeSettings)
    );
  };
}
