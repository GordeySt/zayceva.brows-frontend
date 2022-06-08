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
import { useTranslation } from "react-i18next";
import { useStore } from "../../../common/stores/Store";

interface IProps {
  handleCloseDialog: () => void;
}

const AddUserToBlackListModal = observer(({ handleCloseDialog }: IProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [textFieldValue, setTextFieldValue] = useState("");
  const {
    blacklistStore: {
      notFoundUserMessage,
      addUserToBlackList,
      addUserToBlackListLoading,
    },
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
      <DialogTitle>{t`pages.blacklistPage.addUserSectionTitle`}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="User Id"
          placeholder={t`pages.blacklistPage.addUserInputPlaceholder`}
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
          {t`common.cancel`}
        </Button>
        <Button
          disabled={addUserToBlackListLoading}
          color="primary"
          variant="contained"
          onClick={() => handleAddUserToBlacklist(textFieldValue)}
        >
          {t`common.add`}
        </Button>
      </DialogActions>
    </>
  );
});

export default AddUserToBlackListModal;
