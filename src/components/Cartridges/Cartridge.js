import React from "react";
import RenderCartridge from "./RenderCartridge";

export default function Cartridge({ cartridge }) {
  return (
    <ul>
    {cartridge.map((cart, index) => {
      return <RenderCartridge cart={cart} key={index}/>
    })}
    </ul>
  );
}
