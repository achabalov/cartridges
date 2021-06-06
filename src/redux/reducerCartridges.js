import { NEW_TYPES_CARTRIDGE, ADD_NEW_CARTRIDGE } from "./types";

const initialState = {
    cartridges: [],
    devices: [],
    newTypeCartridge: []
}

export const reducerEquipment = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TYPES_CARTRIDGE:
            console.log('state');
            return {
                ...state,
                newTypeCartridge: [...state.newTypeCartridge, action.payload]
            }
        case ADD_NEW_CARTRIDGE:
            return {
                ...state, 
                cartridges: [...state.cartridges, action.payload],
                newTypeCartridge: []
            }

        default: return state;
    }
}