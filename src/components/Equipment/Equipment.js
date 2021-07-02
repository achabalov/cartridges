import React from 'react';
import Devices from '../Devices/Devices';
import SelectBranch from '../Cartridges/formComponent/SelectBranch';
import SelectBranchRequest from '../Cartridges/SelectBranchRequest/SelectBranchRequest';
import './Equipment.scss';

export default function Equipment() {

    return (
        <div className='equipment'>
                <SelectBranch />
            <hr style={{width: '70%'}}/>
            <div className='__cartridges'>
                <SelectBranchRequest />
            </div>
            <hr style={{width: '90%'}}/>
            <div className='__devices'>
                <Devices />
            </div>
        </div>
    )
}