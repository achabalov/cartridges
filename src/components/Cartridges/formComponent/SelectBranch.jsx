import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_BRANCH } from '../../../redux/types';
import { branchs } from '../../../redux/defaultValues';

export default function SelectBranch() {
    const dispatch = useDispatch();
    return (
        <select className='form-select' onChange={event =>  dispatch({type: ADD_BRANCH, payload: event.target.value})} defaultValue={''}>
            {branchs.map((option, index)=> {
                return ( index === 0 ?
                <option key={index} disabled value={''}>Выберите значение</option> :  
                <option key={index} value={option}>{option}</option>)
            })}
        </select>       
    )
}