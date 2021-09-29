import { createTheme, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";
import { useEffect } from "react";
import React from "react";
import AppLayout from "./AppLayout";
import { UserSettings } from "../../common/types/UserSettings";
import Router from "./Router";
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";

const App = observer(() => {
  const {
    commonStore: { setUserSettings, storeTheme },
  } = useStore();

  useEffect(() => {
    const userSettings: UserSettings = getUserSettingsFromLocalStorage();

    if (userSettings) {
      setUserSettings(userSettings);
    }
  }, [setUserSettings]);

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
