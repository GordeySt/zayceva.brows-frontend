import { createContext, useContext } from "react";
import BlacklistStore from "./BlacklistStore";
import UserSettingsStore from "./UserSettingsStore";
import ModalStore from "./ModalStore";
import AuthStore from "./AuthStore";
import CommonStore from "./CommonStore";
import AppointmentsStore from "./AppointmentsStore";

interface Store {
  userSettingsStore: UserSettingsStore;
  blacklistStore: BlacklistStore;
  modalStore: ModalStore;
  authStore: AuthStore;
  commonStore: CommonStore;
  appointmentsStore: AppointmentsStore;
}

export const store: Store = {
  userSettingsStore: new UserSettingsStore(),
  blacklistStore: new BlacklistStore(),
  modalStore: new ModalStore(),
  authStore: new AuthStore(),
  commonStore: new CommonStore(),
  appointmentsStore: new AppointmentsStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
