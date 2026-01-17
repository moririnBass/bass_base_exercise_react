import React, { useState } from "react";
import FretBoard from "./FretBoard";
import Controller from "./controller/Controller";
import ChordToneView from "./ChordToneView";

function Content() {
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
      {/* <ChordToneView rootSoundNumber={rootSound} quality={quality} /> */}
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

export default Content;
