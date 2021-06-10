import React from 'react';
import Cartridges from '../Cartridges/Cartridges';
import Devices from '../Devices/Devices';
import FormDevices from '../Devices/FormDevices';
import './Equipment.scss';

export default function Equipment() {

    return (
        <div className='equipment'>
            <div className='cartridges'>
                <Cartridges />
            </div>
            <div className='Devices'>
                <FormDevices />
            </div>
        </div>
    )
}