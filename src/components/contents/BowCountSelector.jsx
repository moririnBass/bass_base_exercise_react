function BowCountSelector({ changeBowCount }) {
  const handleBowCount = (e) => changeBowCount(e);

  return (
    <div className="px-5 pb-5">
      <div className="border shadow-xl rounded-xl w-50 p-3 flex flex-col gap-4">
        <div className="grow items-center">
          <label
            htmlFor="bow-4"
            className="flex items-center gap-2 select-none text-sm font-medium"
          >
            <input
              id="bow-4"
              type="radio"
              value="4"
              name="default-radio"
              className="w-4 h-4 rounded-full focus:ring-2 focus:outline-none border"
              onChange={handleBowCount}
            />
            4弦ベース
          </label>
        </div>
        <div className="grow items-center">
          <label
            htmlFor="bow-5"
            className="flex items-center gap-2 select-none text-sm font-medium"
          >
            <input
              id="bow-5"
              type="radio"
              value="5"
              name="default-radio"
              className="w-4 h-4 rounded-full focus:ring-2 focus:outline-none border"
              onChange={handleBowCount}
            />
            5弦ベース
          </label>
        </div>
        <div className="grow items-center">
          <label
            htmlFor="bow-6"
            className="flex items-center gap-2 select-none text-sm font-medium"
          >
            <input
              id="bow-6"
              type="radio"
              value="6"
              name="default-radio"
              className="w-4 h-4 rounded-full focus:ring-2 focus:outline-none border"
              onChange={handleBowCount}
            />
            6弦ベース
          </label>
        </div>
      </div>
    </div>
  );
}

export default BowCountSelector;
