import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Image, Clear } from "@material-ui/icons";

const BlockedUsersList = () => {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Анастасия Вредина" secondary="@vrednina" />
        <IconButton edge="end">
          <Clear />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default BlockedUsersList;
