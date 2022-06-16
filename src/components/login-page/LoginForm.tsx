import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/AdaptiveConstants";
import { useHistory } from "react-router-dom";
import { SIGN_UP_ROUTE } from "../../common/constants/RoutesConstants";
import { Form, Field } from "react-final-form";
import { LoadingButton } from "@mui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  rootCard: {
    padding: "20px",
    width: "550px",

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      width: "100%",
      borderRadius: 0,
    },
    [theme.breakpoints.down(MIN_WIDTH)]: {
      marginTop: "10px",
    },
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  gridItem: {
    paddingTop: "13px",
  },
  inputLabel: {
    color: alpha(theme.palette.text.primary, 0.54),
    fontSize: "16px",
    marginBottom: "8px",
  },
  button: {
    padding: "8px 0 8px 0",
    fontWeight: 500,
  },
  iconButton: {
    color: theme.palette.text.secondary,
  },
}));

interface ILoginFormValues {
  mail: string;
  password: string;
}

const LoginForm = observer(() => {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (values: ILoginFormValues) => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(3000);

    console.log(values);
  };

  return (
    <Card className={classes.rootCard}>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  className={classes.cardTitle}
                >{t`pages.signInPage.sectionTitle`}</Typography>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography
                  className={classes.inputLabel}
                >{t`pages.signInPage.mailLabel`}</Typography>
                <Field<string> name="email">
                  {({ input }) => (
                    <TextField
                      {...input}
                      autoFocus
                      autoComplete="email"
                      size="small"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                </Field>
              </Grid>
              <Grid item style={{ paddingTop: "13px" }}>
                <Typography
                  className={classes.inputLabel}
                >{t`pages.signInPage.passwordLabel`}</Typography>
                <Field<string> name="password">
                  {({ input }) => (
                    <TextField
                      {...input}
                      autoComplete="current-password"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      size="small"
                      margin="dense"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ marginRight: -8 }}
                          >
                            <IconButton
                              className={classes.iconButton}
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item className={classes.gridItem}>
                <LoadingButton
                  className={classes.button}
                  disableElevation
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  loading={submitting}
                >
                  {t`pages.signInPage.sectionTitle`}
                </LoadingButton>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Divider>{t`pages.signInPage.dividerTitle`}</Divider>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Button
                  onClick={() => history.push(SIGN_UP_ROUTE)}
                  className={classes.button}
                  disableElevation
                  fullWidth
                  variant="outlined"
                  color="primary"
                >
                  {t`pages.signInPage.signUpButtonText`}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Card>
  );
});

export default LoginForm;
