import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";

const BlockedUsersListSkeleton = () => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {Array(3)
        .fill(null)
        .map((_) => (
          <ListItem>
            <ListItemAvatar>
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Skeleton animation="wave" width="140px" />}
              secondary={<Skeleton animation="wave" width="50px" />}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default BlockedUsersListSkeleton;
