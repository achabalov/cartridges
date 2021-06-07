import React from "react";

export default function Cartridge({ cartridge }) {
  console.log(cartridge);
  return (
    <div key={Math.random() * 10}>
      {cartridge.map((el) => {
        {
          if (el.branch !== "") {
            return (
              <>
                <div>{el.branch !== '' ? el.branch : ''}</div>
                <div>{el.model}</div>
                <div>{el.count}</div>
              </>
            );
          }
        }
      })}
    </div>
  );
}
