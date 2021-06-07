import React from "react";
import Cartridge2 from './Cartridge2'

export default function Cartridge({ cartridge }) {
  return (
    <ul>
    {cartridge.map((cart, index) => {
      return <Cartridge2 cart={cart} key={index}/>
    })}
    </ul>
  );
}
