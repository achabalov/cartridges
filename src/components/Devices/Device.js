import React from 'react';

export default function Devices({device}) {
    console.log(device);
    console.log(device.dateImportOnSU.selectedDay.toString());
    return (
        <li>
            <div className=''>
                <span>{device.typeDevices}</span>
                <span>{device.deviceName}</span>
                <span>{device.inventoryNumber}</span>
                <span>{device.dateImportOnSU.selectedDay.toString()}</span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}