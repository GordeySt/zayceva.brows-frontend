import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { useStore } from "./common/stores/Store";
import { useEffect } from "react";
import { IUserThemeSettings } from "./common/stores/CommonStore";
import { USER_THEME_SETTINGS } from "./common/constants/localStorageConstants";
import React from "react";
import MiniDrawer from "./components/MiniDrawer";

export interface IStyleProps {
  isDarkMode: boolean;
}

const App = observer(() => {
  const {
    commonStore: { setUserThemeSettings, storeTheme },
  } = useStore();

  const muiTheme = createTheme(storeTheme);

  useEffect(() => {
    const userThemeSettings: IUserThemeSettings = JSON.parse(
      localStorage.getItem(USER_THEME_SETTINGS)!
    );

    if (userThemeSettings) {
      setUserThemeSettings(userThemeSettings);
    }
  }, [setUserThemeSettings]);

  return (
    <ThemeProvider theme={muiTheme}>
      <MiniDrawer />
    </ThemeProvider>
  );
});

export default React.memo(App);
