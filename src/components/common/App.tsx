import { createTheme, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";
import { useEffect } from "react";
import { USER_THEME_SETTINGS } from "../../common/constants/LocalStorageConstants";
import React from "react";
import AppLayout from "./AppLayout";
import { UserThemeSettings } from "../../common/types/UserSettings";
import Router from "./Router";

const App = observer(() => {
  const {
    commonStore: { setUserThemeSettings, storeTheme },
  } = useStore();

  useEffect(() => {
    const userThemeSettings: UserThemeSettings = JSON.parse(
      localStorage.getItem(USER_THEME_SETTINGS)!
    );

    if (userThemeSettings) {
      setUserThemeSettings(userThemeSettings);
    }
  }, [setUserThemeSettings]);

  const muiTheme = createTheme(storeTheme);

  return (
    <ThemeProvider theme={muiTheme}>
      <AppLayout>
        <Router />
      </AppLayout>
    </ThemeProvider>
  );
});

export default React.memo(App);
