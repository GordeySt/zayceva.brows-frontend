import { makeStyles } from "@mui/styles";
import {
  alpha,
  FormControlLabel,
  Radio,
  RadioGroup,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";
import { useStore } from "../../common/stores/Store";
import { languages } from "./utils/languages";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "85%",
    margin: "0 auto",

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      width: "100%",
    },
  },
  section: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      borderRadius: 8,
    },
    padding: theme.spacing(1.8, 2),
  },
  sectionHeader: {
    fontSize: 13,
    color: alpha(theme.palette.text.primary, 0.4),
    textTransform: "uppercase",
    fontWeight: 500,
    lineHeight: "normal",
    fontFamily: "Google Sans",
    marginBottom: theme.spacing(1),
    paddingBottom: 0,
    padding: theme.spacing(0.5),
  },
}));

const LanguageSettingsPage = observer(() => {
  const theme = useTheme();
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const {
    userSettingsStore: { userSettings, setUserSettingsToLocalStorage },
  } = useStore();

  const handleLanguageChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setUserSettingsToLocalStorage({
      ...userSettings,
      language: value as "en" | "ru",
    });

    i18n.changeLanguage(value).then(t => t('key'));
  };

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography className={classes.sectionHeader}>
          {t`pages.languageSettingsPage.interfaceLanguageSectionTitle`}
        </Typography>
        <RadioGroup
          aria-label="language-interface"
          name="language-interface"
          value={userSettings.language}
          onChange={handleLanguageChange}
        >
          {languages.map(({ name, type }) => (
            <FormControlLabel
              value={type}
              key={type}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              }
              label={name}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
});

export default LanguageSettingsPage;
