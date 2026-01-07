// サウンドノートの定数
export const SOUND_NOTES = [
  { seq: 1, name: 'C' },
  { seq: 2, name: 'C#/D♭' },
  { seq: 3, name: 'D' },
  { seq: 4, name: 'D#/E♭' },
  { seq: 5, name: 'E' },
  { seq: 6, name: 'F' },
  { seq: 7, name: 'F#/G♭' },
  { seq: 8, name: 'G' },
  { seq: 9, name: 'G#/A♭' },
  { seq: 10, name: 'A' },
  { seq: 11, name: 'A#/B♭' },
  { seq: 12, name: 'B' },
]

export const BOWS = [
  { no: 1, sound_note: 1 }, // C string
  { no: 2, sound_note: 5 }, // G string
  { no: 3, sound_note: 9 }, // D string
  { no: 4, sound_note: 2 }, // A string
  { no: 5, sound_note: 7 }, // E string
  { no: 6, sound_note: 7 }, // B string
]

export const CODE_TONES = [
  { seq: 1, interval: '4,7' }, // Major
  { seq: 2, interval: '3,7' }, // Minor
  // 他のコードトーンを追加可能
]