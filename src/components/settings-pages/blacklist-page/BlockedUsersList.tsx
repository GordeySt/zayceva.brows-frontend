import {
  alpha,
  Avatar,
  CircularProgress,
  Fab,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography,
} from "@mui/material";
import { Block, Clear } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useStore } from "../../../common/stores/Store";
import { observer } from "mobx-react-lite";
import { Box } from "@mui/system";

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
  loaderWrapper: {
    width: "20%",
    margin: "0 auto",
    position: "absolute",
    bottom: "10px",
    left: "40%",
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
      totalPages,
      currentPage,
      setCurrentPage,
      loadMoreUsers,
      loadMoreUsersLoading,
    },
    modalStore: { openModal, closeModal },
  } = useStore();

  const handleDeleteUserFromBlacklist = (userName: string) => {
    removeUserFromBlackList(userName, userName);
    closeModal();
  };

  const handleOpenDeleteConfirmationDialog = (userName: string) => {
    const fullDialogWidth = false;
    const modalComponent = (
      <DeleteConfirmationModal
        selectedUserName={userName}
        handleCloseDialog={closeModal}
        handleDeleteUserFromBlacklist={handleDeleteUserFromBlacklist}
      />
    );

    openModal(modalComponent, fullDialogWidth);
  };

  return (
    <>
      {blockedUsers && blockedUsers.length ? (
        <>
          <List
            sx={{
              width: "100%",
              marginBottom:
                currentPage !== totalPages || loadMoreUsersLoading
                  ? "30px"
                  : "0",
            }}
          >
            {blockedUsers.map((user) => (
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
                    onClick={() =>
                      handleOpenDeleteConfirmationDialog(user.userName)
                    }
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
          {currentPage !== totalPages && !loadMoreUsersLoading && (
            <div className={classes.linkTextWrapper}>
              <Link
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  loadMoreUsers();
                }}
                className={classes.linkText}
              >
                Показать еще пользователей
              </Link>
            </div>
          )}
          {loadMoreUsersLoading && (
            <Box className={classes.loaderWrapper}>
              <LinearProgress color="primary" />
            </Box>
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
