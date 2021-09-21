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
        <ThemeModeSwitch />
        <Typography variant="h5" component="div">
          Лиза для своих
        </Typography>
        <Typography>Выберите свою роль</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Клиент
        </Button>
        <Button variant="contained" color="primary">
          Модератор
        </Button>
      </CardActions>
    </Card>
  );
};
