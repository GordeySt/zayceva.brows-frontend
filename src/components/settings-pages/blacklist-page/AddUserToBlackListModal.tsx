import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useTheme,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../common/stores/Store";

interface IProps {
  handleCloseDialog: () => void;
}

const AddUserToBlackListModal = observer(({ handleCloseDialog }: IProps) => {
  const theme = useTheme();
  const [textFieldValue, setTextFieldValue] = useState("");
  const {
    blacklistStore: { notFoundUserMessage, addUserToBlackList },
    modalStore: { closeModal },
  } = useStore();

  const handleTextFieldChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTextFieldValue(event.currentTarget.value);
  };

  const handleAddUserToBlacklist = (userName: string) => {
    addUserToBlackList(userName);
    notFoundUserMessage && closeModal();
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
        {notFoundUserMessage && (
          <div
            style={{
              margin: "5px 0 0 0",
              fontSize: "14px",
              color: theme.palette.text.secondary,
              fontWeight: 500,
            }}
          >
            {notFoundUserMessage}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleCloseDialog}>
          Отмена
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleAddUserToBlacklist(textFieldValue)}
        >
          Добавить
        </Button>
      </DialogActions>
    </>
  );
});

export default AddUserToBlackListModal;
