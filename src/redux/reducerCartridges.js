import { NEW_TYPES_CARTRIDGE, ADD_NEW_CARTRIDGE, REMOVE_CARTRIDGE, ADD_DEVICES, DATA_EXPORT_IN_REPAIR, DATA_IMPORT_OF_REPAIR, DATA_EXPORT_TO_SU, SHOW_MODAL_ADD_CARTRIDGE, ADD_BRANCH } from "./types";

const initialState = {
    cartridges: [],
    modal: false,
    branch: '',
    devices: [],
    newTypeCartridge: [],
    addLoading: false,
    filterValue: []
}

export const reducerEquipment = (state = initialState, action) => {
    switch(action.type) {
        case 'filterBranch':
            const branch = state.cartridges.filter(el=> {
                return el.branch === action.payload
            })
            return {
                ...state,
                filterValue: [...branch]
            }
        case 'filterModel':
            const model = state.cartridges.filter(el=> {
                return el.model === action.payload
            })
            return {
                ...state,
                filterValue: [...model]
            }
        case NEW_TYPES_CARTRIDGE:
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
        case SHOW_MODAL_ADD_CARTRIDGE:
            return {
                ...state,
                modal: action.payload
            }
        case ADD_BRANCH: 
             return {
                 ...state,
                 branch: action.payload
             }
        case REMOVE_CARTRIDGE:
            console.log(state.filterValue);
            const temp2 = state.filterValue.map(el=> {
                console.log(action.payload, el.id);
                return el.id !== action.payload
            })
            return {
                ...state, 
                filterValue: [...temp2]
            }

        case ADD_DEVICES:
            return {
                ...state,
                devices: [...state.devices, action.payload]
                
            }
            // адекватный ли перебор массива?
        case DATA_EXPORT_IN_REPAIR:
            const dataInRepair = state.devices.map(el => {
                if(el.id === action.id) {
                    el.dateExportOnRepair = action.payload;
                }   
                return el
            })
            return {
                ...state,
                devices: dataInRepair
            }
        case DATA_IMPORT_OF_REPAIR:
            const dataOfRepair = state.devices.map(el => {
                if(el.id === action.id) {
                    el.dateImportOfRepair = action.payload;
                }   
                return el
            })
            return {
                ...state,
                devices: dataOfRepair
            }
        case DATA_EXPORT_TO_SU:
            const dataToSu = state.devices.map(el => {
                if(el.id === action.id) {
                    el.dateExportToSU = action.payload;
                }   
                return el
            })
            return {
                ...state,
                devices: dataToSu
            }

        default: return state;
    }
}