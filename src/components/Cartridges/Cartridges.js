import React from 'react';
import {useSelector} from 'react-redux';
import Cartridge from './Cartridge';


export default function Cartridges() {
    const cartridges = useSelector(state => state.equipment.cartridges);
    console.log(cartridges);
    return (
        <div>
            {cartridges.map(cartridge => {
                 cartridge.map(cart => {
                    return <Cartridge cartridge={cart} key={Math.random() * 10} />
                })
                // return 
            })}
        </div>
    )
} 