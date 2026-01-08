import { SOUND_NOTES } from "../../lib/constants";

function RootSelector({ changeRootSound }) {
  const handleRootSound = (e) => changeRootSound(e);

  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        Root音を選択
      </label>
      <select
        id="countries"
        className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        onChange={handleRootSound}
      >
        <option value="">選択してください</option>
        {SOUND_NOTES.map((note) => (
          <option key={note.seq} value={note.seq}>
            {note.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default RootSelector;
