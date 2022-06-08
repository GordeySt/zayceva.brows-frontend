import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface IProps {
  selectedUserName: string;
  handleCloseDialog: () => void;
  handleDeleteUserFromBlacklist: (userName: string) => void;
}

const DeleteConfirmationModal = ({
  selectedUserName,
  handleCloseDialog,
  handleDeleteUserFromBlacklist,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <>
      <DialogTitle id="alert-dialog-title">{t`common.confirmation`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t`pages.blacklistPage.confirmationSectionInfo`}{" "}
          <b>&quot;@{selectedUserName}&quot;</b>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleCloseDialog}>
          {t`common.cancel`}
        </Button>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          autoFocus
          onClick={() => handleDeleteUserFromBlacklist(selectedUserName)}
        >
          {t`common.delete`}
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteConfirmationModal;
