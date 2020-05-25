import React, { useState } from "react";

function SwitchButton({isOn: initialisOn = false}) {
  function handleClick() {
    setIsOn(!isOn);
  }
  const [isOn, setIsOn] = useState(initialisOn);
  return (
    <button onClick={handleClick}>TURN {isOn === true ? "OFF" : "ON"}</button>
  );
}

export default function() {
  return <SwitchButton />;
}
