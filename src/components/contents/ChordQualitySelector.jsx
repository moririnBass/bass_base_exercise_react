import { CODE_TONES } from "../../lib/constants";

function ChordQualitySelector({ changeQuality }) {
  const handleQuality = (e) => changeQuality(e);

  return (
    <>
      <label
        htmlFor="chord-quality"
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        コード名を選択
      </label>
      <select
        id="chord-quality"
        className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        onChange={handleQuality}
      >
        <option value="">選択してください</option>
        {CODE_TONES.map((note) => (
          <option key={note.seq} value={note.interval}>
            {note.chordName}
          </option>
        ))}
      </select>
    </>
  );
}

export default ChordQualitySelector;
