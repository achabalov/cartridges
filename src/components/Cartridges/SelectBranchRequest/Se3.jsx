import React from 'react';
import { cartridges_types } from '../../../redux/defaultValues';

export default function Se3({el}) {
    console.log('Se3');
    cartridges_types.map((element, index) => {
        console.log(element === el[index].model);
        console.log(el.length)
    })
// console.log(el);
    return (
        <>
        {/* {
            cartridges_types.map((element, index) => {
                el[index].model !== 'undefined' ?
                
                <div>123</div> : <div>2</div>
            })
        } */}
        </>
    )
}