import RootSelector from "./RootSelector";
import BowCountSelector from "./BowCountSelector";
import ChordQualitySelector from "./ChordQualitySelector";

function Controller({ changeRootSound, changeQuality, changeBowCount }) {
  return (
    <div className="container mx-auto">
      <RootSelector changeRootSound={changeRootSound} />
      <ChordQualitySelector changeQuality={changeQuality} />
      <BowCountSelector changeBowCount={changeBowCount} />
    </div>
  );
}

export default Controller;
