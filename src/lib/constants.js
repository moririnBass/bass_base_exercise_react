// サウンドノートの定数
export const SOUND_NOTES = [
  { seq: 1, name: "C" },
  { seq: 2, name: "C#/Db" },
  { seq: 3, name: "D" },
  { seq: 4, name: "D#/Eb" },
  { seq: 5, name: "E" },
  { seq: 6, name: "F" },
  { seq: 7, name: "F#/Gb" },
  { seq: 8, name: "G" },
  { seq: 9, name: "G#/Ab" },
  { seq: 10, name: "A" },
  { seq: 11, name: "A#/Bb" },
  { seq: 12, name: "B" },
];

export const BOWS = [
  { no: 1, bow_count: 6, sound_note: 1 }, // C string
  { no: 2, bow_count: 4, sound_note: 8 }, // G string
  { no: 3, bow_count: 4, sound_note: 3 }, // D string
  { no: 4, bow_count: 4, sound_note: 10 }, // A string
  { no: 5, bow_count: 4, sound_note: 5 }, // E string
  { no: 6, bow_count: 5, sound_note: 12 }, // B string
];

export const CODE_TONES = [
  { seq: 1, chordName: "Major", interval: "4,7" }, // Major
  { seq: 2, chordName: "minor", interval: "3,7" }, // Minor
  // 他のコードトーンを追加可能
];
