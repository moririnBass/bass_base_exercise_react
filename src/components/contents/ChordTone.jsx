import React, { useState } from "react";
import FretBoard from "./FretBoard";
import Controller from "./Controller";
import { SOUND_NOTES, BOWS, CODE_TONES } from "../../lib/constants";

function ChordTone() {
  const [codeTones, setCodeTones] = useState(CODE_TONES);
  const [rootSound, setRootSound] = useState();
  const [bowCount, setBowCount] = useState(4);

  const changeRootSound = (e) => {
    setRootSound(e.target.value);
  };
  const changeBowCount = (e) => {
    setBowCount(e.target.value);
  };

  // サウンドノードを取得する関数
  // const findSoundNode = (bow, fretCount) => {
  //   let soundSeq = bow.sound_note.seq + fretCount;
  //   const soundNoteCount = SOUND_NOTES.length;
  //   while (soundSeq > soundNoteCount) {
  //     soundSeq -= soundNoteCount;
  //   }
  //   return soundSeq;
  // };

  // コードトーンに含まれるかチェック（Railsのinclude_chord_tone?と同じロジック）
  // exclude?を使っているので、含まれない場合にtrueを返す
  // const includeChordTone = (bow, fretCount, params) => {
  //   if (!params.chordSeq) return false;

  //   const codeTone = codeTones.find(
  //     (ct) => ct.seq === parseInt(params.chordSeq)
  //   );
  //   if (!codeTone) return false;

  //   const soundSeqs = [params.rootSeq];
  //   const soundNoteCount = SOUND_NOTES.length;

  //   const chordIntervals = codeTone.interval.split(",").map((i) => parseInt(i));
  //   chordIntervals.forEach((chordInterval) => {
  //     let soundSeq = soundSeqs[soundSeqs.length - 1] + chordInterval;
  //     if (soundSeq > soundNoteCount) {
  //       soundSeq -= soundNoteCount;
  //     }
  //     soundSeqs.push(soundSeq);
  //   });

  //   const currentSoundSeq = findSoundNode(bow, fretCount);
  //   // exclude?と同じロジック：soundSeqsに含まれない場合にtrue
  //   return !soundSeqs.includes(currentSoundSeq);
  // };

  // const getSoundNoteName = (bow, fretCount) => {
  //   const soundSeq = findSoundNode(bow, fretCount);
  //   const soundNote = SOUND_NOTES.find((sn) => sn.seq === soundSeq);
  //   return soundNote ? soundNote.name.padStart(5, "-").padEnd(5, "-") : "-----";
  // };

  // const getCellClassName = (bow, fretCount) => {
  //   if (!chordSeq) {
  //     return "";
  //   }
  //   // include_chord_tone?がtrue（コードトーンに含まれない）の場合、bg-secondary
  //   if (includeChordTone(bow, fretCount, { rootSeq, chordSeq })) {
  //     return "text-muted bg-secondary";
  //   }
  //   // コードトーンに含まれる場合、text-danger
  //   return "text-danger";
  // };

  return (
    <>
      <FretBoard selectedBowCount={bowCount} selectedRootSound={rootSound} />
      <Controller
        changeRootSound={changeRootSound}
        changeBowCount={changeBowCount}
      />
    </>
  );
}

export default ChordTone;
