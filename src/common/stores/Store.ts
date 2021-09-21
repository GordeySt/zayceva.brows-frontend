import { createContext, useContext } from "react";
import CommonStore from "./CommonStore";

interface Store {
  commonStore: CommonStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
