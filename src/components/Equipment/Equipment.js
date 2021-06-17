import React from 'react';
import Cartridge from '../Cartridges/CartridgeList/Cartridge';
import Devices from '../Devices/Devices';
import CartridgesFilter from '../Cartridges/CartridgeFilter/CartridgesFilter';
import './Equipment.scss';

export default function Equipment() {

    return (
        <div className='equipment'>
            <div className='cartridges'>
                <CartridgesFilter />
                <Cartridge />
            </div>
            <div className='Devices'>
                <Devices />
            </div>
        </div>
    )
}