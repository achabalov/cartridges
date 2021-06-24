import { FINISH_REQUEST } from "./types"
import {branchs} from './defaultValues';

export const finishRequestCartridge = (state = [], action) => {
    switch(action.type) {
        case FINISH_REQUEST:
            const branch = branchs.filter(el => {
                return el === action.payload[0].branch
            })
            const br = branch[0]
            return {
                ...state,
                [br]: [...action.payload]
            }

        default: return state
    }
}