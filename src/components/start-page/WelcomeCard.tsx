import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { ThemeModeSwitch } from "../common/ThemeModeSwitch";

export const WelcomeCard = () => {
  return (
    <Card
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "500px",
        height: "250px",
        position: "relative",
      }}
    >
      <CardContent>
        <div
          style={{
            position: "absolute",
            left: "15px",
            top: "15px",
            fontWeight: 600,
          }}
        >
          zayceva.brows
        </div>
        <ThemeModeSwitch />
        <Typography variant="h5" component="div">
          Лиза для своих
        </Typography>
        <Typography>Выберите свою роль</Typography>
      </CardContent>
      <CardActions>
        <Button style={{ width: "121px" }} variant="contained" color="primary">
          Клиент
        </Button>
        <Button style={{ width: "121px" }} variant="contained" color="primary">
          Модератор
        </Button>
      </CardActions>
    </Card>
  );
};
