const React = require("react");
const WatchItem = require("./WatchItem");

function WatchPage({ watches = [] }) {
  return (
    <>
      <div className="slider-watch">
        <p>Наручные часы</p>
        {watches
          .filter((watch) => watch.typeId === 1)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
      <div className="slider-watch">
        <p>Песочные часы</p>
        {watches
          .filter((watch) => watch.typeId === 2)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
      <div className="slider-watch">
        <p>Настенные часы</p>
        {watches
          .filter((watch) => watch.typeId === 3)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
    </>
  );
}

module.exports = WatchPage;
