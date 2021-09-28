import { alpha, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";
import { Card } from "../../components/about-page/Card";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      height: "97%",
    },
  },
  text: {
    marginTop: theme.spacing(4),
  },
  lastText: {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(4),

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      marginBottom: "-15px",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    transitionDuration: "0.1s",
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.dark,
    },
  },
  cross: {
    textDecoration: "line-through",
    color: alpha(theme.palette.text.primary, 0.5),
  },
  grid: {
    marginTop: theme.spacing(2),
  },
}));

export const AboutPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Привет!</Typography>
      <Typography
        className={classes.text}
        style={{ fontSize: 22, lineHeight: "32px" }}
      >
        Меня зовут{" "}
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/jelisawettta/"
        >
          Лиза
        </a>
        . Это приложение для упрощения жизни моих клиентов и моей в том числе.{" "}
      </Typography>
      <Typography
        className={classes.text}
        style={{ fontSize: 18, lineHeight: "28px", maxWidth: 1000 }}
      >
        Я стремлюсь к максимальному удобству пользования приложением{" "}
        <span className={classes.cross}>(пытаюсь сесть на два стула)</span>{" "}
        через красивый дизайн и понятный UI.
      </Typography>
      <Typography
        className={classes.text}
        style={{ fontSize: 18, lineHeight: "28px" }}
      >
        Главная фишка приложения &#8212; удобство. Проект доступен как на
        мобильных устройствах, так и на компьютерах, а также разрабатываеться с
        помощью открытых библиотек.
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Card
          iconSrc="https://img.icons8.com/doodle/48/000000/vk-messenger.png"
          title="VKontakte"
          to="https://vk.com/prostoprilegla"
          subtitle="Если у вас в душе детище Дурова"
        />
        <Card
          iconSrc="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
          title="Instagram"
          to="https://www.instagram.com/zayceva.brows/"
          subtitle="Великая И Могучая Соцсеть Фотографий"
        />
        <Card
          iconSrc="https://img.icons8.com/color/48/000000/telegram-app--v1.png"
          title="Telegram"
          to="https://telegram.me/sadelizaabeth"
          subtitle="Для любителей Дурова;) и безопасности"
        />
        <Card
          iconSrc="https://img.icons8.com/material-outlined/24/000000/github.png"
          title="Github"
          to="https://github.com/GordeySt/zayceva.brows"
          subtitle="Если интересен ход разработки, вам сюда"
        />
      </Grid>
      <Typography
        className={classes.text}
        style={{ fontSize: 18, lineHeight: "28px" }}
      >
        Одним ранним октябрьским утром{" "}
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/jelisawettta/"
        >
          Лиза
        </a>{" "}
        ехала в метро и читала файл к первой паре. Как правило, Лиза никогда не
        успевала делать домашнее и поэтому все приходилось делать на ходу. Но
        тут телефон выключился, а зарядного в сумке не оказалось &#8212; и не
        нашлось более интересного занятия, как наблюдать за людьми, которые
        сидели напротив, мысленно вырисовывая в голове форму бровей, которая
        подойдёт именно той самой девушке в сером пальто. Тогда и зародилась та
        самая прекрасная идея записаться на курсы{" "}
        <span className={classes.cross}>молодого бойца</span> бровиста!
      </Typography>
      <Typography
        className={classes.lastText}
        style={{ fontSize: 18, lineHeight: "28px" }}
      >
        Зачем так стараться? Чтобы делать людей более привлекательными, а также{" "}
        получить разнообразный опыта в данной сфере. Ну и приложение свое
        хотелось бы. иметь, да.
      </Typography>
    </Container>
  );
};