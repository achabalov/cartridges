import React from 'react';

export default function SelectBranch({setBranch}) {
    const branch = ['Дзержинский',  'Центральный', 'Ворошиловский', 'Краснооктябрьский']

    return (
        <select className='form-select' onChange={event => setBranch(event.target.value)} defaultValue={''}>
            {branch.map((option, index)=> {
                return ( index === 0 ?
                <option key={index} disabled value={''}>Выберите значение</option> :  
                <option key={index} value={option}>{option}</option>)
            })}
        </select>       
    )
}