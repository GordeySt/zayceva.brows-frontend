import {
  Card,
  Grid,
  TextField,
  Theme,
  alpha,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/AdaptiveConstants";
import { useTranslation } from "react-i18next";
import { Field, Form } from "react-final-form";
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

interface ISignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (values: ISignUpFormValues) => {
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
              <Grid item className={classes.gridItem}>
                <Typography
                  className={classes.cardTitle}
                >{t`pages.signUpPage.pageTitle`}</Typography>
              </Grid>
              <Grid item container spacing={1} className={classes.gridItem}>
                <Grid item xs={6}>
                  <Typography
                    className={classes.inputLabel}
                  >{t`pages.signUpPage.firstNameLabel`}</Typography>
                  <Field<string> name="firstName">
                    {({ input }) => (
                      <TextField
                        {...input}
                        autoFocus
                        autoComplete="firstName"
                        size="small"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    className={classes.inputLabel}
                  >{t`pages.signUpPage.lastNameLabel`}</Typography>
                  <Field<string> name="lastName">
                    {({ input }) => (
                      <TextField
                        {...input}
                        autoComplete="lastName"
                        size="small"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography
                  className={classes.inputLabel}
                >{t`pages.signUpPage.mailLabel`}</Typography>
                <Field<string> name="email">
                  {({ input }) => (
                    <TextField
                      {...input}
                      autoComplete="email"
                      size="small"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                </Field>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography
                  className={classes.inputLabel}
                >{t`pages.signUpPage.passwordLabel`}</Typography>
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
                <Typography className={classes.inputLabel}>
                  {t`pages.signUpPage.confirmPasswordLabel`}
                </Typography>
                <Field<string> name="confirmPassword">
                  {({ input }) => (
                    <TextField
                      {...input}
                      autoComplete="current-password"
                      type={showConfirmPassword ? "text" : "password"}
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
                              onClick={() =>
                                setShowConfirmPassword((prev) => !prev)
                              }
                            >
                              {showConfirmPassword ? (
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
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={submitting}
            >
              {t`pages.signInPage.signUpButtonText`}
            </LoadingButton>
          </form>
        )}
      />
    </Card>
  );
};

export default SignUpForm;
