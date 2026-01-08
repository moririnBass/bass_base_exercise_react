import { useState } from "react";
import { SOUND_NOTES, BOWS } from "../../lib/constants";

function FretBoard({ selectedBowCount = 4, rootSoundNumber }) {
  // 将来的に24フレット以外にも対応できるようにしたい
  const frets = Array.from({ length: 25 }, (_, i) => i);

  // 選択したベースの種類に応じて画面描画する弦を変更
  const activeBows = BOWS.filter((bow) => bow.bow_count <= selectedBowCount);

  return (
    <div className="text-black font-mono text-xs m-5 border rounded-sm">
      <div className="overflow-x-auto text-nowrap">
        <div className="flex flex-row gap-x-1">
          {frets.map((fret) => (
            <div key={fret} className="w-12 text-center">
              {fret.toString().padStart(5, "-")}|
            </div>
          ))}
        </div>
        {activeBows.map((bow, stringIndex) => (
          <div key={bow.no} className="flex flex-row gap-x-1">
            {frets.map((fretNo) => {
              // sound_noteのnoからSTRING_NOTESのインデックス取得
              const noteIndex = bow.sound_note - 1 + fretNo;
              const note = SOUND_NOTES[noteIndex % SOUND_NOTES.length];

              return (
                <div
                  key={`${stringIndex}-${fretNo}`}
                  className="w-12 text-center"
                >
                  {note.name.padStart(5, "-")}|
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FretBoard;
