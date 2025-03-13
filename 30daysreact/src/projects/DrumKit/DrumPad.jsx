import React, { useEffect } from "react";
import "./DrumPad.css";
import { motion } from "framer-motion";
const DrumPad = ({ drumSounds }) => {

    useEffect(() => {
        const handleKeyPress = (event) => {
          const key = event.key.toUpperCase(); 
          const sound = drumSounds.find((drum) => drum.key === key); 
          if (sound) {
            playSound(sound.sound);
          }
        };
    
        document.addEventListener("keydown", handleKeyPress);
        return () => {
          document.removeEventListener("keydown", handleKeyPress); 
        };
      }, [drumSounds]);

    const playSound = (soundUrl) => {
        console.log(soundUrl)
        new Audio(soundUrl).play();
    };

    const ball = {
        width: 100,
        height: 100,
        backgroundColor: "#dd00ee",
        borderRadius: "50%",
    }
  

  return (
    <div className="DrumPad">
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", bounce: 0.5 },
    }}
    style={ball} // Ensure `ball` is a valid style object
    className="DrumButtons"
    >
      {drumSounds.map((sound) => {
        return <div><button key={sound.key} onClick={()=>{playSound(sound.sound)}}>{sound.key}</button></div>
      })}
   </motion.div>
   </div>
  );
};



export default DrumPad;

