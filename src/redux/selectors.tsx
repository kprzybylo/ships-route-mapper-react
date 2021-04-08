import { AppStore } from "./reducers/storeTypes";

export const getTurnRadius = (store: AppStore) => store && store.settings 
    ?  store.settings.turnRadius 
    : 0;