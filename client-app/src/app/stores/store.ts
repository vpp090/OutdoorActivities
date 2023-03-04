import { createContext, useContext } from "react";
import OfferStore from "./offerStore";

interface Store{
    offerStore: OfferStore
}


export const store: Store = {
    offerStore: new OfferStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}