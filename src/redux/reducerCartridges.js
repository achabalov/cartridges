import {
  NEW_TYPES_CARTRIDGE,
  ADD_NEW_CARTRIDGE,
  REMOVE_CARTRIDGE,
  SHOW_MODAL_ADD_CARTRIDGE,
  ADD_BRANCH_CARTRIDGES,
  DEVICE_FILTER_BRANCH,
  REMOVE_ALL_CARTRIDGE,
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
    case REMOVE_ALL_CARTRIDGE:
      return {
        ...state,
        filterValue: []
      }
    case DEVICE_FILTER_BRANCH:
      const branch = state.cartridges.filter((el) => {
        return el.branch === action.payload;
      });
      return {
        ...state,
        filterValue: [...branch],
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
    case ADD_BRANCH_CARTRIDGES:
      return {
        ...state,
        branch: action.payload,
      };
    case REMOVE_CARTRIDGE:
      const temp2 = state.filterValue.filter((el) => {
        console.log(el.id, action.payload);
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
