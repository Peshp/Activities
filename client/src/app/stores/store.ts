import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
    name: ReactNode;
    setName: MouseEventHandler<HTMLButtonElement> | undefined;
    activityStore: ActivityStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
