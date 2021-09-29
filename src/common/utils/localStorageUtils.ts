import { USER_SETTINGS } from "../constants/LocalStorageConstants";
import { UserSettings } from "../types/UserSettings";

export const getUserSettingsFromLocalStorage = (): UserSettings =>
  JSON.parse(localStorage.getItem(USER_SETTINGS)!);

export const setUserSettingsToLocalStorage = (userSettings: UserSettings) =>
  localStorage.setItem(USER_SETTINGS, JSON.stringify(userSettings));
