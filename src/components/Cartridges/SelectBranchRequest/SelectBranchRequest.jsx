import React from 'react';
import { useSelector } from 'react-redux';
import './SelectBranchRequest.scss';

export default function SelectBranchRequest() {
    const branch = useSelector(state=> state.equipment.branch)
    const readyBranch = useSelector(state=> state.readyApplication)
    return (
        readyBranch[branch] ? <div className='finish__request'>
        <div className='finish__request__branch'>
             <h5>Филиал</h5>
        <div>{branch}</div>
        </div>
        <div className='finish__request__cartridge'>
        
        {readyBranch[branch]  && readyBranch[branch] !== '' && readyBranch[branch].map((request, index) => { 
            return (
                <div key={index}>
                    <div className='finish__request__cartridge__model'>{request.model}</div>
                    <div className='finish__request__cartdige__count'>{request.count}</div>
                </div>
            )
        })}
        </div>
    </div> : ''
             

    )
}