import React, { useState } from "react";
import { SOUND_NOTES, BOWS, CODE_TONES } from "../../lib/constants";

function ChordTone({ rootSeq, chordSeq, availableBowString }) {
  const [soundNotes, setSoundNotes] = useState(SOUND_NOTES);
  const [bows, setBows] = useState(BOWS);
  const [codeTones, setCodeTones] = useState(CODE_TONES);
  const [fret, setFret] = useState({ no: 24 });

  // フィルタリングされたボウ（弦）
  const filteredBows = bows.filter(
    (bow) => bow.no <= (parseInt(availableBowString) || 4)
  );

  // サウンドノードを取得する関数
  const findSoundNode = (bow, fretCount, soundNotes) => {
    let soundSeq = bow.sound_note.seq + fretCount;
    const soundNoteCount = soundNotes.length;
    while (soundSeq > soundNoteCount) {
      soundSeq -= soundNoteCount;
    }
    return soundSeq;
  };

  // コードトーンに含まれるかチェック（Railsのinclude_chord_tone?と同じロジック）
  // exclude?を使っているので、含まれない場合にtrueを返す
  const includeChordTone = (bow, fretCount, params) => {
    if (!params.chordSeq) return false;

    const codeTone = codeTones.find(
      (ct) => ct.seq === parseInt(params.chordSeq)
    );
    if (!codeTone) return false;

    const soundSeqs = [params.rootSeq];
    const soundNoteCount = soundNotes.length;

    const chordIntervals = codeTone.interval.split(",").map((i) => parseInt(i));
    chordIntervals.forEach((chordInterval) => {
      let soundSeq = soundSeqs[soundSeqs.length - 1] + chordInterval;
      if (soundSeq > soundNoteCount) {
        soundSeq -= soundNoteCount;
      }
      soundSeqs.push(soundSeq);
    });

    const currentSoundSeq = findSoundNode(bow, fretCount, soundNotes);
    // exclude?と同じロジック：soundSeqsに含まれない場合にtrue
    return !soundSeqs.includes(currentSoundSeq);
  };

  const getSoundNoteName = (bow, fretCount) => {
    const soundSeq = findSoundNode(bow, fretCount, soundNotes);
    const soundNote = soundNotes.find((sn) => sn.seq === soundSeq);
    return soundNote ? soundNote.name.padStart(5, "-").padEnd(5, "-") : "-----";
  };

  const getCellClassName = (bow, fretCount) => {
    if (!chordSeq) {
      return "";
    }
    // include_chord_tone?がtrue（コードトーンに含まれない）の場合、bg-secondary
    if (includeChordTone(bow, fretCount, { rootSeq, chordSeq })) {
      return "text-muted bg-secondary";
    }
    // コードトーンに含まれる場合、text-danger
    return "text-danger";
  };

  return (
    <div className="mb-3 mt-3 table-responsive border">
      <table className="table table-borderless table-sm font-monospace">
        <thead>
          <tr>
            <th>
              <pre>
                {Array.from({ length: fret.no + 1 }, (_, i) =>
                  i.toString().padStart(8, " ")
                ).join("")}
              </pre>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBows.map((bow) => (
            <tr key={bow.no}>
              <th>
                {Array.from({ length: fret.no + 1 }, (_, fretCount) => (
                  <span
                    key={fretCount}
                    className={getCellClassName(bow, fretCount)}
                  >
                    {getSoundNoteName(bow, fretCount)}|
                  </span>
                ))}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChordTone;
