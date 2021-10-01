import { createContext, useContext } from "react";
import BlacklistStore from "./BlacklistStore";
import CommonStore from "./CommonStore";
import ModalStore from "./ModalStore";

interface Store {
  commonStore: CommonStore;
  blacklistStore: BlacklistStore;
  modalStore: ModalStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  blacklistStore: new BlacklistStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
