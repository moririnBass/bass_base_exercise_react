import RootSelector from "./RootSelector";
import BowCountSelector from "./BowCountSelector";
import ChordQualitySelector from "./ChordQualitySelector";

function Controller({ changeRootSound, changeQuality, changeBowCount }) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 p-4">
      <BowCountSelector changeBowCount={changeBowCount} />
      <RootSelector changeRootSound={changeRootSound} />
      <ChordQualitySelector changeQuality={changeQuality} />
    </div>
  );
}

export default Controller;
