import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartridges_types } from '../../../redux/defaultValues';

export default function SelectModel() {

    const model = useSelector(state=> state.cartridge.model);
    const dispatch = useDispatch();
    // const type = Object.keys(cartridges_types);
    // console.log(type);
    return (
        <select className='form-select' onChange={event => dispatch({type: 'ADD_MODEL', payload: event.target.value})} defaultValue={model}>
            <option value={model}>Выберите модель</option>
            {cartridges_types.map((model, index)=> {
                // console.log(model);
                return <option key={index} value={model}>{model}</option>
            })}
        </select>
    )
}