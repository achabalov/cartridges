import { NEW_TYPES_CARTRIDGE, ADD_NEW_CARTRIDGE, REMOVE_CARTRIDGE } from "./types";

const initialState = {
    cartridges: [],
    devices: [],
    newTypeCartridge: [],
    addLoading: false,
}

export const reducerEquipment = (state = initialState, action) => {
    switch(action.type) {
        // добавление нового типа картриджа в филиал
        case NEW_TYPES_CARTRIDGE:
            console.log('state');
            return {
                ...state,
                newTypeCartridge: [...state.newTypeCartridge, action.payload],
                addLoading: true
            }
        // добавление общего колличества картриджей в филиал
        case ADD_NEW_CARTRIDGE:
            return {
                ...state, 
                cartridges: [...state.cartridges, action.payload],
                newTypeCartridge: [],
                addLoading: false
            }
            // удаление, не работает из за не правильной передачи id... и 10 раз переделывалась
        case REMOVE_CARTRIDGE:
            console.log(state.cartridges);
            console.log(state.cartridges);
            const temp = [...state.cartridges];
            console.log(temp);
            temp.filter((cart, index) => {
                const car = [...cart]
                console.log(car.id, action.payload);
                return car.id !== action.payload
            })

        default: return state;
    }
}