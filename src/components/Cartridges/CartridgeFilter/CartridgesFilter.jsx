import React from 'react';
import { useDispatch } from 'react-redux';
import { branchs } from '../../../redux/defaultValues';
import { cartridges_types } from '../../../redux/defaultValues';

export default function CartridgesFilter() {
    const dispatch = useDispatch();
    
    return (
        <div className="">
        <div className='filter'>
            <div className='filter__list'>
                <label htmlFor='' >Выберите филиал</label>
                <select defaultValue='Выберите' onChange={event => dispatch({type: 'filterBranch', payload: event.target.value})}>
                {
                    branchs.map((opt, index) => {
                       return <option key={index} value={opt}>{opt}</option>
                    })
                }
                </select>
            </div>
        </div>
        <div className='filter'>
        <div className='filter__list'>
            <label htmlFor='' >Выберите тип картриджей</label>
            <select defaultValue='Выберите' onChange={event => dispatch({type: 'filterModel', payload: event.target.value})}>
            {
                cartridges_types.map((opt, index) => {
                   return <option key={index} value={opt}>{opt}</option>
                })
            }
            </select>
        </div>
    </div>
    </div>
    )
}