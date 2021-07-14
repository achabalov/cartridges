import {
  ADD_NEW_CARTRIDGE,
  REMOVE_CARTRIDGE,
  SHOW_MODAL_ADD_CARTRIDGE,
  ADD_BRANCH_CARTRIDGES,
  REMOVE_ALL_CARTRIDGE,
  FINISH_REQUEST,
  DEVICE_FILTER_BRANCH,
} from "./types";

import {branchs} from './defaultValues';
import {cartridges_types} from './defaultValues';

const initialState = {
  cartridges: [],
  modal: false,
  branch: "",
  addLoading: false,
  finishRequestCartridges: [],
}; 

export const reducerEquipment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CARTRIDGE:
      return {
        ...state,
        cartridges: [...state.cartridges, action.payload],
        addLoading: false,
      };
    case REMOVE_ALL_CARTRIDGE:
      const filterBranch = state.cartridges.filter(el=> {
        return el.branch !== state.branch;
      })
      return {
        ...state,
        cartridges: [...filterBranch]
      }
      // case FINISH_REQUEST:
      //   const oneRequest = action.payload[0].branch
      //   console.log(oneRequest);
      //   return {
      //     ...state,
      //     finishRequestCartridges: [...state.finishRequestCartridges, {
      //       [oneRequest]: [...action.payload]
      //     }]
      //   }

      // case FINISH_REQUEST:
      //   const oneRequest = action.payload[0].branch
      //   console.log(oneRequest);
      //   return {
      //     ...state,
      //     finishRequestCartridges: [...state.finishRequestCartridges, ...action.payload]
      //     }
        

      case FINISH_REQUEST:
        let mas = {}
        Object.entries(cartridges_types).map((key, index) => {
          let m = key[0]
          let c = key[1]
          action.payload.map((el, index2) => {
            
            if(m === el.model) {
              if(c === 0) {
                c = +el.count;
              } else {
                c += +el.count
              }
            }
            mas[m] = +c;
          })
        })
        console.log(mas);

        return {
          ...state,
          finishRequestCartridges: [...state.finishRequestCartridges, [action.payload[0].branch, mas]]
        }


// ============= goood ======================
      
      // case FINISH_REQUEST:
      //   action.payload.map((el, index) => {
      //     const newObj = Object.entries(cartridges_types).map((key, index) => {
      //       console.log(key[0], action.payload[0]['model']);
      //       if(key[0] === action.payload[0]['model']) {
      //         key = [key[0], action.payload[0].count]
      //         return key
      //       }
      //       return key
      //     })
      //     console.log(newObj);
      //   })
        
      // return state

// ===================== ==========================


    // case FINISH_REQUEST: 
    //   // const branch = branchs.filter(el => {
    //   //     return el === action.payload[0].branch
    //   // })
    //   // const br = branch[0]
    //   // // console.log(branch, ' --- ', branch[0]);
    //   // console.log(state[br] === undefined);
    //   // if(state[br] === undefined) {
    //     console.log(action.payload, 'action payload')
    //     // cartridges_types

    //     cartridges_types.map(el=> {
    //       console.log(el);
    //       action.payload.map((cart)=> {

    //           console.log(cart, 'cartType', el.model, 'el_model' );  
    //           return true
    //       })
    //     })
    //     return {
    //     ...state,
    //     finishRequestCartridges: [...state.finishRequestCartridges, [...action.payload]]
    //     }
      
    //   // return {
    //   //     ...state,
    //   //     [br]: [...state[br], ...action.payload]
    //   // }


      case DEVICE_FILTER_BRANCH:
      const branches = state.cartridges.filter((el) => {
        return el.branch === action.payload;
      });
      return {
        ...state,
        cartridges: [...branches],
      }
    // return {
    //   ...state, 
    //   finishRequestCartridges: [...state.finishRequestCartridges, ...action.payload]
    // }
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
      const temp2 = state.cartridges.filter((el) => {
        console.log(el.id, action.payload);
        return el.id !== action.payload;
      });
      return {
        ...state,
        cartridges: [...temp2],
      };

    default:
      return state;
  }
};
