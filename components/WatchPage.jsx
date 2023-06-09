const React = require('react');
const WatchItem = require('./WatchItem');

function WatchPage({ watches = [] }) {
  return (
    <>
      <p>Наручные часы</p>
      <div className="slider-watch">
        {watches
          .filter((watch) => watch.typeId === 1)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
      <p>Песочные часы</p>
      <div className="slider-watch">
        {watches
          .filter((watch) => watch.typeId === 2)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
      <p>Настенные часы</p>
      <div className="slider-watch">
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
