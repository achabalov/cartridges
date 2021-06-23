import React from 'react';
import { useSelector } from 'react-redux';

export default function SelectBranchRequest() {
    const readyBranch = useSelector(state=> [...state.readyApplication.readyApplication])
    const rdn = [...readyBranch]
    console.log(...rdn)
    return (
        <div>
            {rdn.map((request, index) => {
                console.log(request);
                return (
                    <div key={index}>
                        <div>{request.branch}</div>
                        <div>{request.model}</div>
                        <div>{request.count}</div>
                    </div>
                )
            })}
        </div>
    )
}