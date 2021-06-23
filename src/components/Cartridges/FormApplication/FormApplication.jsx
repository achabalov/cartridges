import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FINISH_REQUEST } from '../../../redux/types';

export default function FormApplication() {
    const filterValue = useSelector(state=> state.equipment.filterValue)
    const dispatch = useDispatch();
    const request = useSelector(state=> state.readyApplication.readyApplication);
    console.log(request);
    return (
        <div>
            <span>Проверьте правильность</span>
            <br />
            <button className='btn btn-success' onClick={()=> dispatch({type: FINISH_REQUEST, payload: filterValue })}>Сформировать заявку</button>
        </div>
    )
}
