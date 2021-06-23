import React from 'react';
import Cartridge from '../Cartridges/CartridgeList/Cartridge';
import Devices from '../Devices/Devices';
import SelectBranch from '../Cartridges/formComponent/SelectBranch';
import SelectBranchRequest from '../Cartridges/SelectBranchRequest/SelectBranchRequest';
import './Equipment.scss';

export default function Equipment() {

    return (
        <div className='equipment'>
            <div className='cartridges'>
                <SelectBranch />
                <SelectBranchRequest />
            </div>
            <div className='Devices'>
                <Devices />
            </div>
        </div>
    )
}