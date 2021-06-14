import React from 'react';

export default function SelectModel({setModel}) {

    const cartridges_types = ['fx-703', 'TK-1200', '435\\285', '725', '728'];

    return (
        <select className='form-select' onChange={event => setModel(event.target.value)}  defaultValue={''}>
            {cartridges_types.map((model, index)=> {
                return (index === 0 ? 
                    <option key={index} disabled  value={''}>Выберите значение</option> :  
                    <option key={index} value={model}>{model}</option>)
            })}
        </select>
    )
}