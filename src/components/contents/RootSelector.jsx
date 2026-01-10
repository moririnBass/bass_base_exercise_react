import { SOUND_NOTES } from "../../lib/constants";

function RootSelector({ changeRootSound }) {
  const handleRootSound = (e) => changeRootSound(e);

  return (
    <div className="px-5 pb-5">
      <label htmlFor="root-note-selector" className="sr-only">
        Root音を選択
      </label>
      <select
        id="select-root-sound"
        aria-label="Root音を選択"
        className="block px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand shadow-xl placeholder:text-body"
        onChange={handleRootSound}
      >
        <option value="">Root音を選択してください</option>
        {SOUND_NOTES.map((note) => (
          <option key={note.seq} value={note.seq}>
            {note.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RootSelector;
