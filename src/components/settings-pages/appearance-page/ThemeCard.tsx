import { ButtonBase, Grid, Radio, Theme, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../common/stores/Store";
import { makeStyles } from "@mui/styles";
import { CustomTheme } from "../../../common/types/UserSettings";
import { useTranslation } from "react-i18next";

const useThemeCardStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "&:last-child": {
      paddingRight: theme.spacing(2),
    },
  },
  border: {
    boxShadow: "0 0 0 1px " + theme.palette.divider,
  },
  box: {
    height: 128,
    width: 96,
    borderRadius: 12,
    alignItems: "baseline",
  },
  item: {
    height: "50%",
  },
  type: {
    fontSize: 14,
    marginTop: theme.spacing(0.5),
    maxWidth: 100,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  radioHolder: {
    height: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    color: ({ color }: { color: string }) => color,
  },
  radioChecked: {
    color: theme.palette.primary.main,
  },
}));

const ThemeCard = observer(({ theme }: { theme: CustomTheme }) => {
  const defaultColor = theme.palette.background.default;
  const primaryColor = theme.palette.primary.main;
  const textColor = theme.palette.text.primary;
  const paperColor = theme.palette.background.paper;
  const classes = useThemeCardStyles({ color: textColor });
  const { t } = useTranslation();
  const {
    userSettingsStore: { userSettings, setUserSettingsToLocalStorage },
  } = useStore();
  const isCurrent = userSettings.themeType === theme.type;

  const changeTheme = () => {
    if (!isCurrent)
      setUserSettingsToLocalStorage({ ...userSettings, themeType: theme.type });
  };

  return (
    <div className={classes.root}>
      <Grid
        component={ButtonBase}
        onClick={changeTheme}
        container
        style={{ backgroundColor: paperColor }}
        className={`${classes.box} ${isCurrent ? classes.border : ""}`}
      >
        <Grid
          item
          xs={6}
          style={{ background: primaryColor, borderTopLeftRadius: 12 }}
          className={classes.item}
        />
        <Grid
          item
          xs={6}
          style={{ background: defaultColor, borderTopRightRadius: 12 }}
          className={classes.item}
        />
        <div className={classes.radioHolder}>
          <Radio
            value={theme.type}
            disableRipple
            color="primary"
            checked={isCurrent}
            className={classes.radio}
          />
        </div>
      </Grid>
      <Typography className={classes.type}>
        {t(`pages.appearanceSettingsPage.${theme.name}`)}
      </Typography>
    </div>
  );
});

export default ThemeCard;
