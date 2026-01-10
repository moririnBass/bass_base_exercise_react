import xLogo from "../../assets/xLogo.svg";

function Header() {
  return (
    <>
      <header className="bg-blue-500 body-font">
        <div className="text-white container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          BassBaseExercise
          <a
            className="md:ml-auto h-5 w-5 inline-flex items-center border-0 focus:outline-none justify-center text-base mt-4 md:mt-0"
            href="https://x.com/kusakimoririn"
            target="_blank"
          >
            <img src={xLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
