import RootSelector from "./RootSelector";
import BowCountSelector from "./BowCountSelector";

function Controller({ changeRootSound, changeBowCount }) {
  return (
    <>
      <RootSelector changeRootSound={changeRootSound} />
      <BowCountSelector changeBowCount={changeBowCount} />
    </>
  );
}

export default Controller;
