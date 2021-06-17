import React from 'react';
import SelectModel from '../formComponent/SelectModal';
import SelectCartridgeCount from '../formComponent/SelectCartridgeCount';
import './ModalCartridgeForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_NEW_CARTRIDGE, SHOW_MODAL_ADD_CARTRIDGE } from '../../../redux/types';

export default function ModalCartridgeForm() {
const modal = useSelector(state => state.equipment.modal)
const model = useSelector(state=> state.cartridge.model)
const count = useSelector(state=> state.cartridge.count)
const branch = useSelector(state=> state.equipment.branch)
const dispatch = useDispatch();
    return (
        <div className={modal ?'modal__select active' : 'modal__select'} 
        onClick={()=> dispatch({type: SHOW_MODAL_ADD_CARTRIDGE, payload: false})}>
            <div 
            className={modal ? 'modal__select__container active' :'modal__select__container'} onClick={e=> e.stopPropagation()}>
                <label htmlFor="">Выберите модель</label>
                <SelectModel />
                <label htmlFor="">Укажите количество</label>
                <SelectCartridgeCount />
                {model && count ? <button className='btn btn-success' onClick={()=> {
                    dispatch({type: ADD_NEW_CARTRIDGE, payload: {branch, model, count}})
                    dispatch({type: 'RESET'})
}}>Добавить</button> : ''}
                <button className='btn btn-danger' onClick={()=> dispatch({type: SHOW_MODAL_ADD_CARTRIDGE, payload: false})}>Закрыть</button>
            </div>
        </div>
        )
}