import {
  alpha,
  Avatar,
  CircularProgress,
  Fab,
  Link,
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
  loadingContainer: {
    background: "transparent",
    boxShadow: "none",

    "&:hover": {
      background: alpha(theme.palette.text.secondary, 0.1),
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
  linkTextWrapper: {
    width: "100%",
    textAlign: "center",
    paddingBottom: "10px",
    position: "absolute",
    bottom: "2px",
  },
  linkText: {
    textDecoration: "none",
    cursor: "pointer",
    color: theme.palette.text.secondary,

    "&:hover": {
      borderBottom: "1px solid " + theme.palette.text.secondary,
      paddingBottom: "2px",
    },
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
      {blockedUsers && blockedUsers.length ? (
        <>
          <List
            sx={{
              width: "100%",
              marginBottom: blockedUsers.length > 3 ? "20px" : "0",
            }}
          >
            {blockedUsers.slice(0, 3).map((user) => (
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
            ))}
          </List>
          {blockedUsers.length > 3 && (
            <div className={classes.linkTextWrapper}>
              <Link className={classes.linkText}>
                Показать всех пользователей
              </Link>
            </div>
          )}
        </>
      ) : (
        <Typography
          color="textSecondary"
          variant="body2"
          className={classes.emptyText}
        >
          В черном списке пока нет пользователей.
        </Typography>
      )}
    </>
  );
});

export default BlockedUsersList;
