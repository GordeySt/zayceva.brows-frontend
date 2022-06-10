import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/AdaptiveConstants";

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
  submitButton: {
    padding: "8px 0 8px 0",
    fontWeight: 500,
  },
  iconButton: {
    color: theme.palette.text.secondary,
  },
}));

const LoginForm = observer(() => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target.email.value);
  };

  return (
    <Card className={classes.rootCard}>
      <form onSubmit={handleLoginSubmit}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              className={classes.cardTitle}
            >{t`pages.signInPage.signInSectionTitle`}</Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography
              className={classes.inputLabel}
            >{t`pages.signInPage.signInSectionMailLabel`}</Typography>
            <TextField
              autoFocus
              autoComplete="email"
              name="email"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item style={{ paddingTop: "13px" }}>
            <Typography
              className={classes.inputLabel}
            >{t`pages.signInPage.signInSectionPasswordLabel`}</Typography>
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
            <Button
              className={classes.submitButton}
              disableElevation
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              {t`pages.signInPage.signInSectionTitle`}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
});

export default LoginForm;
