
import React from 'react'
import DrumPad from "./DrumPad";

const DrumKit = () => {

    const drumSounds = [
    { key: "Q", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { key: "W", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { key: "E", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { key: "A", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { key: "S", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { key: "D", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { key: "Z", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { key: "X", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { key: "C", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  ];

  return (
    <div>
      <DrumPad drumSounds ={drumSounds}/>
    </div>
  )
}

export default DrumKit
