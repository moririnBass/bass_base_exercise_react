import { Fragment } from "react";

function FretNumber({ frets }) {
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

  return frets.map((fret) => (
    <Fragment key={fret}>
      <div className="w-12 text-center">{convertNotePad(fret.toString())}</div>
      <span>|</span>
    </Fragment>
  ));
}

export default FretNumber;
