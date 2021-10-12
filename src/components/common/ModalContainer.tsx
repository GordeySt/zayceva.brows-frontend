import { Dialog } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";

const ModalContainer = observer(() => {
  const {
    modalStore: { modal, closeModal },
  } = useStore();
  return (
    <Dialog open={modal.open} onClose={closeModal} fullWidth={modal.fullWidth}>
      {modal.body}
    </Dialog>
  );
});

export default ModalContainer;
