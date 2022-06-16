import {
  Button,
  Card,
  Grid,
  TextField,
  Theme,
  alpha,
  Typography,
  OutlinedInput,
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

const SignUpForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className={classes.rootCard}>
      <form>
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
              <TextField
                autoFocus
                autoComplete="firstName"
                name="firstName"
                size="small"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.inputLabel}
              >{t`pages.signUpPage.lastNameLabel`}</Typography>
              <TextField
                autoFocus
                autoComplete="lastName"
                name="lastName"
                size="small"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography
              className={classes.inputLabel}
            >{t`pages.signUpPage.mailLabel`}</Typography>
            <TextField
              autoFocus
              autoComplete="email"
              name="email"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography
              className={classes.inputLabel}
            >{t`pages.signUpPage.passwordLabel`}</Typography>
            <OutlinedInput
              autoComplete="current-password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              size="small"
              margin="dense"
              endAdornment={
                <InputAdornment position="end" style={{ marginRight: -8 }}>
                  <IconButton
                    className={classes.iconButton}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography className={classes.inputLabel}>
              {t`pages.signUpPage.confirmPasswordLabel`}
            </Typography>
            <OutlinedInput
              autoComplete="current-password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              fullWidth
              size="small"
              margin="dense"
              endAdornment={
                <InputAdornment position="end" style={{ marginRight: -8 }}>
                  <IconButton
                    className={classes.iconButton}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
