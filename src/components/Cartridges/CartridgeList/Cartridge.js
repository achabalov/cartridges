import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CARTRIDGE } from "../../../redux/types";
import './Cartridge.scss';

export default function Cartridge() {
  const cartridge = useSelector(state => state.equipment.cartridges);
  const dispatch = useDispatch();
  return (
    <ul>
    {
      cartridge.map((request, index) => {
        return (
          <li key={index} className='cartridge'>
            <div className='cartridge__branch'>Филиал {request.branch} 
            </div>
            <div className='cartridge__model'>картридж {request.model}<button 
            className='btn btn-warning'
            onClick={()=> dispatch({type: REMOVE_CARTRIDGE, payload: request.id})}
            >Удалить</button></div>
            <div className='cartridge__count'>Колличество {request.count}</div>
            </li>
        )
      })
    }

    </ul>
  );
}
