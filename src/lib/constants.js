// サウンドノートの定数
export const SOUND_NOTES = [
  { seq: 0, name: "C" },
  { seq: 1, name: "C#/Db" },
  { seq: 2, name: "D" },
  { seq: 3, name: "D#/Eb" },
  { seq: 4, name: "E" },
  { seq: 5, name: "F" },
  { seq: 6, name: "F#/Gb" },
  { seq: 7, name: "G" },
  { seq: 8, name: "G#/Ab" },
  { seq: 9, name: "A" },
  { seq: 10, name: "A#/Bb" },
  { seq: 11, name: "B" },
];

export const BOWS = [
  { no: 1, bow_count: 6, sound_note: 0 }, // C string
  { no: 2, bow_count: 4, sound_note: 7 }, // G string
  { no: 3, bow_count: 4, sound_note: 2 }, // D string
  { no: 4, bow_count: 4, sound_note: 9 }, // A string
  { no: 5, bow_count: 4, sound_note: 4 }, // E string
  { no: 6, bow_count: 5, sound_note: 11 }, // B string
];

export const CODE_TONES = [
  // 1. 三和音（トライアド）
  { seq: 1, chordName: "Major:メジャー", interval: [4, 7] },
  { seq: 2, chordName: "minor:マイナー", interval: [3, 7] },
  { seq: 3, chordName: "dim:ディミニッシュ", interval: [3, 6] },
  { seq: 4, chordName: "aug:オーグメント", interval: [4, 8] },
  { seq: 5, chordName: "sus4:サスペンデッド・フォー", interval: [5, 7] },
  // 2. 四和音（セブンス・コード）
  { seq: 6, chordName: "M7:メジャー・セブンス", interval: [4, 7, 11] },
  { seq: 7, chordName: "m7:マイナー・セブンス", interval: [3, 7, 10] },
  { seq: 8, chordName: "7:ドミナント・セブンス", interval: [4, 7, 10] },
  {
    seq: 9,
    chordName: "mM7:マイナー・メジャー・セブンス",
    interval: [3, 7, 11],
  },
  {
    seq: 10,
    chordName: "m7-5:マイナー・セブンス・フラットファイブ",
    interval: [3, 6, 10],
  },
  { seq: 11, chordName: "dim7:ディミニッシュ・セブンス", interval: [3, 6, 9] },
  // 3. テンション・その他
  { seq: 12, chordName: "add9:アドナインス", interval: [2, 4, 7] },
  { seq: 13, chordName: "6:シックス", interval: [4, 7, 9] },
  { seq: 14, chordName: "m6:マイナー・シックス", interval: [3, 7, 9] },
  { seq: 15, chordName: "7sus4:セブン・サスフォー", interval: [5, 7, 10] },
];
