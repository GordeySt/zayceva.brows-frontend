import { createTheme, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";
import { useLayoutEffect, useState } from "react";
import React from "react";
import AppLayout from "./AppLayout";
import { UserSettings } from "../../common/types/UserSettings";
import Router from "./Router";
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";
import { useTranslation } from "react-i18next";

const App = observer(() => {
  const {
    userSettingsStore: { setUserSettings, storeTheme },
  } = useStore();
  const { i18n } = useTranslation();
  const [_, setLoading] = useState(false);

  useLayoutEffect(() => {
    const userSettingsFromStorage: UserSettings =
      getUserSettingsFromLocalStorage();

    if (userSettingsFromStorage) {
      setUserSettings(userSettingsFromStorage);
      i18n.changeLanguage(userSettingsFromStorage.language);
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [setUserSettings, i18n]);

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
