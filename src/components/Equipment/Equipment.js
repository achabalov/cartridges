import React from 'react';
import Cartridges from '../Cartridges/Cartridges'

export default function Equipment() {

    return (
        <div className='Equipment'>
            <div className='cartridges'>
                <Cartridges />
            </div>
            <div className='Devices'>
                {/* <Devices /> */}
            </div>
        </div>
    )
}