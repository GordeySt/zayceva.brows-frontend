import {
  Avatar,
  CircularProgress,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography,
} from "@mui/material";
import { Block, Clear } from "@material-ui/icons";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../common/stores/Store";
import { makeStyles } from "@mui/styles";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    background: theme.palette.background.paper,
  },
  loadingContainer: {
    background: "transparent",
    boxShadow: "none",

    "&:hover": {
      background: "transparent",
    },
  },
  clearIcon: {
    color: theme.palette.text.secondary,
  },
  loading: {
    color: theme.palette.text.secondary,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  emptyText: {
    padding: theme.spacing(2.5, 0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const BlockedUsersList = observer(() => {
  const classes = useStyles();
  const {
    blacklistStore: {
      blockedUsers,
      deleteUserLoading,
      removeUserFromBlackList,
      target,
    },
    modalStore: { openModal, closeModal },
  } = useStore();

  const handleDeleteUserFromBlacklist = (userName: string) => {
    removeUserFromBlackList(userName, userName);
    closeModal();
  };

  const handleOpenDialog = (userName: string) => {
    openModal(
      <DeleteConfirmationModal
        selectedUserName={userName}
        handleCloseDialog={closeModal}
        handleDeleteUserFromBlacklist={handleDeleteUserFromBlacklist}
      />
    );
  };

  return (
    <>
      <List sx={{ width: "100%" }}>
        {blockedUsers && blockedUsers.length ? (
          blockedUsers.map((user) => (
            <ListItem key={user.userName}>
              <ListItemAvatar>
                <Avatar>
                  <Block />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName} ${user.secondName}`}
                secondary={`@${user.userName}`}
              />
              <div style={{ position: "relative" }}>
                <Fab
                  aria-label={user.userName}
                  size="small"
                  className={classes.loadingContainer}
                  onClick={() => handleOpenDialog(user.userName)}
                >
                  <Clear className={classes.clearIcon} />
                </Fab>
                {deleteUserLoading && target === user.userName && (
                  <CircularProgress size={40} className={classes.loading} />
                )}
              </div>
            </ListItem>
          ))
        ) : (
          <Typography
            color="textSecondary"
            variant="body2"
            className={classes.emptyText}
          >
            В черном списке пока нет пользователей.
          </Typography>
        )}
      </List>
    </>
  );
});

export default BlockedUsersList;
