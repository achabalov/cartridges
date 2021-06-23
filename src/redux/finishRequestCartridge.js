import { FINISH_REQUEST } from "./types"

const initialState = {
    readyApplication: [],
}

export const finishRequestCartridge = (state = initialState, action) => {
    switch(action.type) {
        case FINISH_REQUEST:
            return {
                ...state,
                readyApplication: [...state.readyApplication, action.payload]
            }

        default: return state
    }
}