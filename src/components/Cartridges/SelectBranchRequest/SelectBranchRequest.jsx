import React from 'react';
import { useSelector } from 'react-redux';
import './SelectBranchRequest.scss';

export default function SelectBranchRequest() {
    const branch = useSelector(state=> state.equipment.branch)
    const readyBranch = useSelector(state=> state.readyApplication)

    return (
        <div className='select__branch'>
            <div></div>
            <div>{branch}</div>
            {readyBranch[branch]  && readyBranch[branch] !== '' && readyBranch[branch].map((request, index) => {
                {console.log(readyBranch[branch]);}
                return (
                    <div key={index}>
                        <div>{request.model}</div>
                        <div>{request.count}</div>
                    </div>
                )
            })}
        </div>
    )
}