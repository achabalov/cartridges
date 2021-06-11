import React from 'react';
import Cartridges from '../Cartridges/Cartridges';
import Devices from '../Devices/Devices';
import './Equipment.scss';

export default function Equipment() {

    return (
        <div className='equipment'>
            <div className='cartridges'>
                <Cartridges />
            </div>
            <div className='Devices'>
                <Devices />
            </div>
        </div>
    )
}