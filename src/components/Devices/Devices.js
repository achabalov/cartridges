import React from "react";
import { useSelector } from "react-redux";
import Device from "./Device";

export default function Devices() {
  const devices = useSelector((state) => state.device.devices);
  return (
    <ul>
      {devices.map((device, index) => (
        <Device key={index} device={device} />
      ))}
    </ul>
  );
}
