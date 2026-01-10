import { CODE_TONES } from "../../lib/constants";

function ChordQualitySelector({ changeQuality }) {
  const handleQuality = (e) => changeQuality(e);

  return (
    <div className="px-5 pb-5">
      <select
        id="chord-quality"
        className="block w-50 px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand shadow-xl placeholder:text-body"
        onChange={handleQuality}
      >
        <option value="">コード名を選択してください</option>
        {CODE_TONES.map((note) => (
          <option key={note.seq} value={note.interval}>
            {note.chordName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChordQualitySelector;
