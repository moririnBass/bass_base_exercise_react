import React, { useState } from "react";
import FretBoard from "./FretBoard";
import Controller from "./Controller";
import { SOUND_NOTES, BOWS, CODE_TONES } from "../../lib/constants";

function ChordTone() {
  const [quality, setQuality] = useState();
  const [rootSound, setRootSound] = useState();
  const [bowCount, setBowCount] = useState(4);

  const changeRootSound = (e) => {
    setRootSound(e.target.value);
  };
  const changeQuality = (e) => {
    setQuality(e.target.value);
  };
  const changeBowCount = (e) => {
    setBowCount(Number(e.target.value));
  };

  return (
    <>
      <FretBoard
        bowCount={bowCount}
        rootSoundNumber={rootSound}
        quality={quality}
      />
      <Controller
        changeRootSound={changeRootSound}
        changeQuality={changeQuality}
        changeBowCount={changeBowCount}
      />
    </>
  );
}

export default ChordTone;
