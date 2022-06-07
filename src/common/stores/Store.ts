import { createContext, useContext } from "react";
import BlacklistStore from "./BlacklistStore";
import UserSettingsStore from "./UserSettingsStore";
import ModalStore from "./ModalStore";

interface Store {
  userSettingsStore: UserSettingsStore;
  blacklistStore: BlacklistStore;
  modalStore: ModalStore;
}

export const store: Store = {
  userSettingsStore: new UserSettingsStore(),
  blacklistStore: new BlacklistStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
