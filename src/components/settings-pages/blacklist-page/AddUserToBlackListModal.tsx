import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IProps {
  handleCloseDialog: () => void;
  handleAddUserToBlacklistButtonClick: (userName: string) => void;
}

const AddUserToBlackListModal = ({
  handleCloseDialog,
  handleAddUserToBlacklistButtonClick,
}: IProps) => {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTextFieldValue(event.currentTarget.value);
  };

  return (
    <>
      <DialogTitle>Добавить пользователя</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="User Id"
          placeholder="Например, vredina"
          type="userId"
          fullWidth
          variant="standard"
          value={textFieldValue}
          onChange={handleTextFieldChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleCloseDialog}>
          Отмена
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleAddUserToBlacklistButtonClick(textFieldValue)}
        >
          Добавить
        </Button>
      </DialogActions>
    </>
  );
};

export default AddUserToBlackListModal;
