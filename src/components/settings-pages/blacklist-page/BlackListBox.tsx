import { IconButton, Theme, Typography } from "@mui/material";
import BlockedUsersList from "./BlockedUsersList";
import { AddRounded } from "@mui/icons-material";
import { MIN_WIDTH } from "../../../common/constants/AdaptiveConstants";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../common/stores/Store";
import BlackListBoxSkeleton from "./BlockedUsersListSkeleton";
import AddUserToBlackListModal from "./AddUserToBlackListModal";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    width: "70%",
    minHeight: "265px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
    position: "relative",
    [theme.breakpoints.down(MIN_WIDTH)]: {
      borderRadius: 0,
      width: "100%",
    },
  },
  sectionHeader: {
    fontSize: 13,
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
    fontWeight: 500,
    lineHeight: "normal",
    fontFamily: "Google Sans",
    paddingBottom: 0,
    padding: theme.spacing(0, 1.8),
  },
  addButton: {
    color: theme.palette.text.secondary,
  },
}));

const BlackListBox = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    blacklistStore: { loadUsersLoading },
    modalStore: { openModal, closeModal },
  } = useStore();

  const handleOpenAddUserToBlacklistDialog = () => {
    const fullDialogWidth = true;
    const modalComponent = (
      <AddUserToBlackListModal handleCloseDialog={closeModal} />
    );

    openModal(modalComponent, fullDialogWidth);
  };

  return (
    <div className={classes.section}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography className={classes.sectionHeader}>
          {t`pages.blacklistPage.hiddenUserSectionTitle`}
        </Typography>
        <IconButton
          onClick={handleOpenAddUserToBlacklistDialog}
          className={classes.addButton}
          disabled={loadUsersLoading}
        >
          <AddRounded />
        </IconButton>
      </div>
      {loadUsersLoading ? <BlackListBoxSkeleton /> : <BlockedUsersList />}
    </div>
  );
});

export default BlackListBox;
