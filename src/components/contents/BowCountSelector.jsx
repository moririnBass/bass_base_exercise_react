import Bo from "./BowCountSelector";

function BowCountSelector({ changeBowCount }) {
  const handleBowCount = (e) => changeBowCount(e);

  return (
    <>
      <div className="border">
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value="4"
            name="default-radio"
            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
            onChange={handleBowCount}
          />
          <label
            for="default-radio-1"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            4弦ベース
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value="5"
            name="default-radio"
            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
            onChange={handleBowCount}
          />
          <label
            for="default-radio-1"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            5弦ベース
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value="6"
            name="default-radio"
            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
            onChange={handleBowCount}
          />
          <label
            for="default-radio-1"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            6弦ベース
          </label>
        </div>
      </div>
    </>
  );
}

export default BowCountSelector;
