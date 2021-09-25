import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import { IStyleProps } from "../../App";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    rootCard: {
      width: "460px",
      padding: "20px",
    },
    cardTitle: {
      fontSize: "28px",
      fontWeight: 500,
      fontFamily: "Roboto",
    },
    gridItem: {
      paddingTop: "13px",
    },
    inputLabel: ({ isDarkMode }: IStyleProps) => ({
      color: isDarkMode ? "rgba(233, 233, 233, 0.54)" : "rgb(0, 0, 0, 0.54)",
      fontSize: "16px",
      marginBottom: "8px",
    }),
    submitButton: {
      padding: "8px 0 8px 0",
      fontWeight: 500,
    },
  })
);

export const AdminLoginForm = observer(() => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    commonStore: {
      userThemeSettings: { isDarkMode },
    },
  } = useStore();
  const classes = useStyles({ isDarkMode });

  return (
    <Card className={classes.rootCard}>
      <form>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.cardTitle}>Вход</Typography>
          </Grid>
          <Grid item style={{ paddingTop: "13px" }}>
            <Typography className={classes.inputLabel}>Пароль</Typography>
            <OutlinedInput
              autoComplete="current-password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="dense"
              endAdornment={
                <InputAdornment position="end" style={{ marginRight: -8 }}>
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                      <VisibilityIcon color="disabled" />
                    ) : (
                      <VisibilityOffIcon color="disabled" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Button
              className={classes.submitButton}
              disableElevation
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
});
