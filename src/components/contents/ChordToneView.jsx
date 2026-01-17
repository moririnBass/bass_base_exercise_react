import { SOUND_NOTES } from "../../lib/constants";

function ChordToneView(intervals) {
  return intervals.intervals.map((interval) => {
    SOUND_NOTES.find((soundNote) => soundNote.seq == Number(interval)).name;
  });
}

export default ChordToneView;
