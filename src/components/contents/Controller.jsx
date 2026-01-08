import RootSelector from "./RootSelector";
import BowCountSelector from "./BowCountSelector";
import ChordQualitySelector from "./ChordQualitySelector";

function Controller({ changeRootSound, changeQuality, changeBowCount }) {
  return (
    <>
      <RootSelector changeRootSound={changeRootSound} />
      <ChordQualitySelector changeQuality={changeQuality} />
      <BowCountSelector changeBowCount={changeBowCount} />
    </>
  );
}

export default Controller;
