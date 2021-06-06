import { combineReducers } from "redux";
import { reducerEquipment } from "./reducerCartridges";

export const rootReducer = combineReducers({
    equipment: reducerEquipment,
})