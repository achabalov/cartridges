import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteReduser } from '../../redux/actions';
import { REMOVE_CARTRIDGE } from '../../redux/types';
import './Cartridge2.scss'

export default function Cartridge2({cart}) {
    const dispatch = useDispatch();
    return (
        <li className='cartridge'>
            {cart.branch !== '' ? 
            <>
            <div className='cartridge__branch'>Филиал {cart.branch} 
            </div>
            </>
            : 
            <>
            <div className='cartridge__model'>картридж {cart.model}<button 
            className='btn btn-warning'
            onClick={()=> dispatch({type: REMOVE_CARTRIDGE, payload: cart.id})}
            >Удалить</button></div>
            <div className='cartridge__count'>Колличество {cart.count}</div>
            </>}
            
        </li>
    )
}