import { Card, Grid, TextField, Typography } from "@mui/material";
import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { KeyboardEvent, useState } from "react";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";
import { Form, Field } from "react-final-form";
import { LoadingButton } from "@mui/lab";
import { useStore } from "../../common/stores/Store";
import { UserToEdit } from "../../common/models/user";
import {
  formatPhoneNumber,
  formatPhoneNumberOnKeyDown,
} from "../../common/utils/formatterUtils";
import { createEditUserValidationShema } from "../../common/utils/validatorUtils";
import BookedAppointmentsTable from "../../components/profile-page/BookedAppointmentsTable";

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

const ProfilePage = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    authStore: { user, editUser },
  } = useStore();

  const [phoneNumberValue, setPhoneNumberValue] = useState(
    user?.user.phoneNumber || ""
  );

  const onSubmit = async (values: UserToEdit) => {
    const userToEdit = { ...values, phoneNumber: phoneNumberValue };

    await editUser(userToEdit);
  };

  const handlePhoneNumberValueChange = (e: any) => {
    const { value, selectionStart } = e.target;
    const { data } = e.nativeEvent;
    const formattedValue = formatPhoneNumber(value, selectionStart, data);

    setPhoneNumberValue(formattedValue);
  };

  const handlePhoneNumberKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Backspace") {
      setPhoneNumberValue(formatPhoneNumberOnKeyDown(phoneNumberValue!));
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.75fr",
        padding: "10px 20px 0 20px",
      }}
    >
      <Card className={classes.rootCard}>
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true, invalid: true }}
          initialValues={{
            firstName: user?.user.firstName,
            lastName: user?.user.lastName,
          }}
          validate={(values) =>
            createEditUserValidationShema(t).validateForm(values)
          }
          render={({ handleSubmit, submitting, invalid }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container direction="column">
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
                  <Typography className={classes.inputLabel}>
                    {t`pages.signUpPage.phoneNumberLabel`}
                  </Typography>
                  <Field<string> name="phoneNumber">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          value={phoneNumberValue}
                          onChange={(e) => {
                            input.onChange(e);
                            handlePhoneNumberValueChange(e);
                          }}
                          onKeyDown={handlePhoneNumberKeyDown}
                          autoComplete="phone-number"
                          size="small"
                          error={meta.touched && !!meta.error}
                          fullWidth
                          variant="outlined"
                          type="tel"
                          inputProps={{ maxLength: "19" }}
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
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={submitting}
              >
                Изменить
              </LoadingButton>
            </form>
          )}
        />
      </Card>
      <BookedAppointmentsTable />
    </div>
  );
});

export default ProfilePage;
