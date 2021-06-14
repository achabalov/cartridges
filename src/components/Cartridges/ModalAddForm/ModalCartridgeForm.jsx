import React from 'react';
import SelectModel from '../formComponent/SelectModel';
import SelectCartridgeCount from '../formComponent/SelectCartridgeCount';
import './ModalCartridgeForm.scss'

export default function ModalCartridgeForm() {

    return (
        <div className='modal__select'>
            <div className='modal__select__container'>
                <label htmlFor="">Выберите модель</label>
                <SelectModel />
                <label htmlFor="">Укажите количество</label>
                <SelectCartridgeCount />
            </div>
        </div>
        )
}