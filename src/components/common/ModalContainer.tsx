import { Dialog } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";

const ModalContainer = observer(() => {
  const {
    modalStore: { modal },
  } = useStore();
  return <Dialog open={modal.open}>{modal.body}</Dialog>;
});

export default ModalContainer;
