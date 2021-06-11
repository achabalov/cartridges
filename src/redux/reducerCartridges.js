import { NEW_TYPES_CARTRIDGE, ADD_NEW_CARTRIDGE, REMOVE_CARTRIDGE, ADD_DEVICES } from "./types";

const initialState = {
    cartridges: [],
    devices: [],
    newTypeCartridge: [],
    addLoading: false,
}

export const reducerEquipment = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TYPES_CARTRIDGE:
            console.log('state');
            return {
                ...state,
                newTypeCartridge: [...state.newTypeCartridge, action.payload],
                addLoading: true
            }
        case ADD_NEW_CARTRIDGE:
            return {
                ...state, 
                cartridges: [...state.cartridges, action.payload],
                newTypeCartridge: [],
                addLoading: false
            }
        case REMOVE_CARTRIDGE: 
            const temp = [...state.cartridges];
            const temp2 = temp.map(el=> {
                return el.filter(el=> {
                console.log(el, action.payload);
                return el.id !== action.payload
                })
            })
            return {
                ...state, 
                cartridges: [...temp2]
            }
        case ADD_DEVICES:
            return {
                ...state,
                devices: [...state.devices, action.payload]
                
            }

        default: return state;
    }
}