import RootSelector from "./RootSelector";
function Controller({ changeRootSound, changeBowCount }) {
  return (
    <>
      <RootSelector changeRootSound={changeRootSound} />
    </>
  );
}

export default Controller;
