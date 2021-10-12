import { makeAutoObservable } from "mobx";

interface Modal {
  open: boolean;
  body: JSX.Element | null;
  fullWidth: boolean;
  maxWidth?: string;
}

export default class ModalStore {
  modal: Modal = {
    open: false,
    body: null,
    fullWidth: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (content: JSX.Element, fullWidth: boolean, maxWidth?: string) => {
    this.modal.open = true;
    this.modal.body = content;
    this.modal.fullWidth = fullWidth;
  };

  closeModal = () => {
    this.modal.open = false;
    this.modal.body = null;
  };
}
