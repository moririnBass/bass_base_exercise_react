import { SOUND_NOTES } from "../../lib/constants";

function Notes({ intervals }) {
  return intervals.map((interval) => {
    SOUND_NOTES.find((soundNote) => soundNote.seq === Number(interval)).name;
  });
}

export default Notes;
