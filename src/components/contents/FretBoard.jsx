import { SOUND_NOTES, BOWS } from "../../lib/constants";
import Notes from "./Notes";
import FretNumber from "./FretNumber";
import Bows from "./Bows";

function FretBoard({ bowCount = 4, rootSoundNumber, quality }) {
  // 将来的に24フレット以外にも対応できるようにしたい
  const frets = Array.from({ length: 25 }, (_, i) => i);

  // 選択したベースの種類に応じて画面描画する弦を変更
  const activeBows = BOWS.filter((bow) => bow.bow_count <= bowCount);

  // ルート/コードいずれかが未選択のときは全て表示する
  const isSelectedRootAndQuality = () => {
    if (rootSoundNumber == null || rootSoundNumber === "" || !quality) {
      return false;
    }
    const root = Number(rootSoundNumber);
    return Number.isFinite(root);
  };

  const intervalArray = () => {
    if (isSelectedRootAndQuality()) {
      return [
        Number(rootSoundNumber),
        ...quality
          .split(",")
          .map(
            (interval) =>
              (Number(rootSoundNumber) + Number(interval)) % SOUND_NOTES.length
          ),
      ];
    }
    return [];
  };

  return (
    <div className="text-black font-mono m-5">
      {/* コードトーン表示箇所 */}
      <>
        <Notes intervals={intervalArray()} />
      </>
      <div className="border rounded-sm">
        <div className="overflow-x-auto text-nowrap">
          <div className="flex flex-row gap-x-1 mb-5">
            <FretNumber frets={frets} />
          </div>
          <Bows
            activeBows={activeBows}
            frets={frets}
            intervals={intervalArray()}
            isSelectedRootAndQuality={isSelectedRootAndQuality()}
          />
        </div>
      </div>
    </div>
  );
}

export default FretBoard;
