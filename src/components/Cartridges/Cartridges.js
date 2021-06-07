import React from 'react';
import {useSelector} from 'react-redux';
import Cartridge from './Cartridge';


export default function Cartridges() {
    const cartridges = useSelector(state => state.equipment.cartridges);
    return (
        <div>
            {cartridges.map((cartridge, index) => {
                    return <Cartridge cartridge={cartridge} key={index} />
            })}
        </div>
    )
} 