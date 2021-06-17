import { combineReducers } from "redux";
import cartridgeCart from "./cartridgeCart";
import { reducerEquipment } from "./reducerCartridges";

export const rootReducer = combineReducers({
    equipment: reducerEquipment,
    cartridge: cartridgeCart
})