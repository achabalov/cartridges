import React from 'react';
import { useSelector } from 'react-redux';

export default function SelectBranchRequest() {
    const branch = useSelector(state=> state.equipment.branch)
    console.log(branch);
    const readyBranch = useSelector(state=> state.readyApplication)
    console.log(readyBranch[branch]);

    return (
        <div>
            <div>{branch}</div>
            {readyBranch[branch] !== undefined && readyBranch[branch].map((request, index) => {
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