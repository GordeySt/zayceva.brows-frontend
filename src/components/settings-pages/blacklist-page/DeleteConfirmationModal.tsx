import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

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
  return (
    <>
      <DialogTitle id="alert-dialog-title">Подтверждение</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Точно хочешь удалить из списка <b>&quot;@{selectedUserName}&quot;</b>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleCloseDialog}>
          Отмена
        </Button>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          autoFocus
          onClick={() => handleDeleteUserFromBlacklist(selectedUserName)}
        >
          Удалить
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteConfirmationModal;
