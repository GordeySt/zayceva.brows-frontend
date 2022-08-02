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
import { formatPhoneNumber } from "../../common/utils/formatterUtils";
import {
  isBYPhoneNumber,
  createValidation,
} from "../../common/utils/validatorUtils";

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
  errorText: {
    color: theme.palette.error.main,
    fontSize: "14px",
    marginTop: "8px",
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
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState("");

  const onSubmit = async (values: ISignUpFormValues) => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    setPhoneNumberErrorMsg("");

    if (isBYPhoneNumber(phoneNumberValue)) {
      setPhoneNumberErrorMsg("Phone number should be like +375 (33) 123-44-22");
      await sleep(0);
      return;
    }

    await sleep(3000);

    console.log({ ...values, phoneNumber: phoneNumberValue });
  };

  const handlePhoneNumberValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumberValue(formatPhoneNumber(e.currentTarget.value));
  };

  return (
    <Card className={classes.rootCard}>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, invalid: true }}
        validate={(values) => createValidation(t).validateForm(values)}
        render={({ handleSubmit, submitting, invalid }) => (
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
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          autoFocus
                          autoComplete="firstName"
                          size="small"
                          fullWidth
                          variant="outlined"
                          error={meta.touched && !!meta.error}
                        />
                        {meta.error && meta.touched && (
                          <span className={classes.errorText}>
                            {meta.error}
                          </span>
                        )}
                      </>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    className={classes.inputLabel}
                  >{t`pages.signUpPage.lastNameLabel`}</Typography>
                  <Field<string> name="lastName">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          autoComplete="lastName"
                          size="small"
                          fullWidth
                          variant="outlined"
                          error={meta.touched && !!meta.error}
                        />
                        {meta.error && meta.touched && (
                          <span className={classes.errorText}>
                            {meta.error}
                          </span>
                        )}
                      </>
                    )}
                  </Field>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography
                  className={classes.inputLabel}
                >{t`pages.signUpPage.mailLabel`}</Typography>
                <Field<string> name="email">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        autoComplete="email"
                        size="small"
                        fullWidth
                        variant="outlined"
                        error={meta.touched && !!meta.error}
                      />
                      {meta.error && meta.touched && (
                        <span className={classes.errorText}>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography className={classes.inputLabel}>
                  {t`pages.signUpPage.phoneNumberLabel`}
                </Typography>
                <Field<string> name="phoneNumber">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        value={phoneNumberValue}
                        onChange={handlePhoneNumberValueChange}
                        autoComplete="phone-number"
                        size="small"
                        error={meta.touched && !!phoneNumberErrorMsg}
                        fullWidth
                        variant="outlined"
                      />
                      {phoneNumberErrorMsg && meta.touched && (
                        <span className={classes.errorText}>
                          {phoneNumberErrorMsg}
                        </span>
                      )}
                    </>
                  )}
                </Field>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography
                  className={classes.inputLabel}
                >{t`pages.signUpPage.passwordLabel`}</Typography>
                <Field<string> name="password">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        size="small"
                        margin="dense"
                        sx={{ marginTop: "0px" }}
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
                      {meta.error && meta.touched && (
                        <span className={classes.errorText}>{meta.error}</span>
                      )}
                    </>
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
              disabled={invalid}
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
