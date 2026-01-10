import { SOUND_NOTES, BOWS } from "../../lib/constants";

function FretBoard({ bowCount = 4, rootSoundNumber, quality }) {
  // 将来的に24フレット以外にも対応できるようにしたい
  const frets = Array.from({ length: 25 }, (_, i) => i);

  // 選択したベースの種類に応じて画面描画する弦を変更
  const activeBows = BOWS.filter((bow) => bow.bow_count <= bowCount);

  // 選択したルート音とポジションが同じであることをチェック
  const isHidePosition = (noteSeq) => {
    // ルート/コードいずれかが未選択のときは全て表示する
    if (!rootSoundNumber || !quality) {
      return false;
    }

    // CMajorを選択した時の例は下記
    // return [1, 5, 8].includes (noteSeq);
    // Gminorを選択した時の例は下記
    // return [8, 11, 3].includes (noteSeq);
    return ![
      Number(rootSoundNumber),
      ...quality
        .split(",")
        .map(
          (interval) =>
            (Number(rootSoundNumber) + Number(interval)) % SOUND_NOTES.length
        ),
    ].includes(noteSeq);
  };

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

  return (
    <div className="text-black font-mono m-5 border rounded-sm">
      <div className="overflow-x-auto text-nowrap">
        <div className="flex flex-row gap-x-1 mb-5">
          {frets.map((fret) => (
            <>
              <div key={fret} className="w-12 text-center">
                {convertNotePad(fret.toString())}
              </div>
              <span>|</span>
            </>
          ))}
        </div>
        {activeBows.map((bow, stringIndex) => (
          <div key={bow.no} className="flex flex-row gap-x-1">
            {frets.map((fretNo) => {
              // sound_note（ルート音のインデックス）にフレット数を加算
              const noteIndex = bow.sound_note + fretNo;
              const note = SOUND_NOTES[noteIndex % SOUND_NOTES.length];
              const isHide = isHidePosition(note.seq);
              return (
                <>
                  <div
                    key={`${stringIndex}-${fretNo}`}
                    className={`w-12 text-center font-black ${
                      isHide ? "bg-gray-700" : ""
                    }`}
                  >
                    {isHide ? "".padStart(5, "-") : convertNotePad(note.name)}
                  </div>
                  |
                </>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FretBoard;
