import React from 'react';
import { useSelector } from 'react-redux';
import './SelectBranchRequest.scss';

export default function SelectBranchRequest() {
    const branch = useSelector(state=> state.equipment.branch)
    const finishRequest = useSelector(state=> state.equipment.finishRequestCartridges)
    const filterToBranch = finishRequest.filter(el=> {
        return el.branch === branch
    })
    console.log(filterToBranch);
    return (
        filterToBranch.length ? <div className='finish__request'>
        <div className='finish__request__branch'>
             <h5>Филиал</h5>
        <div>{branch}</div>
        </div>
        <div className='finish__request__cartridge'>
        
        {/* {finishRequest[branch]  && finishRequest[branch] !== '' && finishRequest[branch].map((request, index) => {  */}
        { filterToBranch.map((request, index) => {
            return (
                <div key={index}>
                    <div className='finish__request__cartridge__model'>{request.model}</div>
                    <div className='finish__request__cartdige__count'>{request.count}</div>
                </div>
            )
        })}
        </div>
        <div className='finish__request__cartridge__button'>
            <button className='btn btn-secondary'>Исполнить заявку</button>
            <button className='btn btn-dark'>Отправить заявку в архив</button>

        </div>
    </div> : ''
    )
}