import { SOUND_NOTES } from "../../lib/constants";

function RootSelector({ changeRootSound }) {
  const handleRootSound = (e) => changeRootSound(e);

  return (
    <div className="px-5 pb-5">
      <select
        id="countries"
        className="w-50 block px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand shadow-xl placeholder:text-body"
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
