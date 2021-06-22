import {
  NEW_TYPES_CARTRIDGE,
  ADD_NEW_CARTRIDGE,
  REMOVE_CARTRIDGE,
  SHOW_MODAL_ADD_CARTRIDGE,
  ADD_BRANCH,
  FILTER_BRANCH,
  FILTER_MODEL,
} from "./types";

const initialState = {
  cartridges: [],
  modal: false,
  branch: "",
  newTypeCartridge: [],
  addLoading: false,
  filterValue: [],
};

export const reducerEquipment = (state = initialState, action) => {
  switch (action.type) {
      case ADD_NEW_CARTRIDGE:
        return {
          ...state,
          cartridges: [...state.cartridges, action.payload],
          newTypeCartridge: [],
          addLoading: false,
        };
    case FILTER_BRANCH:
      console.log('filter branch');
      const branch = state.cartridges.filter((el) => {
        return el.branch === action.payload;
      });
      console.log(branch);
      return {
        ...state,
        filterValue: [...branch],
      };
    case FILTER_MODEL:
      const model = state.cartridges.filter((el) => {
        return el.model === action.payload;
      });
      return {
        ...state,
        filterValue: [...model],
      };
    case NEW_TYPES_CARTRIDGE:
      return {
        ...state,
        newTypeCartridge: [...state.newTypeCartridge, action.payload],
        addLoading: true,
      };
    case SHOW_MODAL_ADD_CARTRIDGE:
      return {
        ...state,
        modal: action.payload,
      };
    case ADD_BRANCH:
      return {
        ...state,
        branch: action.payload,
      };
    case REMOVE_CARTRIDGE:
      const temp2 = state.filterValue.map((el) => {
        return el.id !== action.payload;
      });
      return {
        ...state,
        filterValue: [...temp2],
      };

    default:
      return state;
  }
};
