import { Fragment } from "react";
import { SOUND_NOTES } from "../../lib/constants";

function Bows({ activeBows, frets, intervals, isSelectedRootAndQuality }) {
  const convertNotePad = (note) => {
    const len = note.length;
    if (len === 5) {
      return note;
    }

    const totalPadding = 5 - len;
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;
    return "-".repeat(leftPadding) + note + "-".repeat(rightPadding);
  };

  // CMajorを選択した時の例は下記
  // return [1, 5, 8].includes (noteSeq);
  // Gminorを選択した時の例は下記
  // return [8, 11, 3].includes (noteSeq);
  const isHidePosition = (viewTargetArray, noteSeq) => {
    if (isSelectedRootAndQuality) {
      return !viewTargetArray.includes(noteSeq);
    }
    return false;
  };

  {
    return activeBows.map((bow) => (
      <div key={bow.no} className="flex flex-row gap-x-1">
        {frets.map((fretNo) => {
          // sound_note（開放弦の音のインデックス）にフレット数を加算
          const noteIndex = bow.sound_note + fretNo;
          const note = SOUND_NOTES[noteIndex % SOUND_NOTES.length];
          const isHide = isHidePosition(intervals, note.seq);
          return (
            <Fragment key={`${bow.no}-${fretNo}`}>
              <div
                className={`w-12 text-center font-black ${
                  isHide ? "bg-gray-700" : ""
                }`}
              >
                {isHide ? "".padStart(5, "-") : convertNotePad(note.name)}
              </div>
              <span>|</span>
            </Fragment>
          );
        })}
      </div>
    ));
  }
}

export default Bows;
