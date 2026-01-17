import React, { useState } from "react";
import FretBoard from "./FretBoard";
import Controller from "./controller/Controller";
import ChordToneView from "./ChordToneView";
import { SOUND_NOTES } from "../../lib/constants";

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

  // ルート/コードいずれかが未選択のときは全て表示する
  const isSelectedRootAndQuality = () => {
    if (rootSound == null || rootSound === "" || !quality) {
      return false;
    }
    const root = Number(rootSound);
    return Number.isFinite(root);
  };

  const intervalArray = () => {
    if (isSelectedRootAndQuality()) {
      return [
        Number(rootSound),
        ...quality
          .split(",")
          .map(
            (interval) =>
              (Number(rootSound) + Number(interval)) % SOUND_NOTES.length
          ),
      ];
    }
    return [];
  };

  return (
    <>
      {/* コードトーン表示箇所 */}
      <ChordToneView intervals={intervalArray()} />
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
