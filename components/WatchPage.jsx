const React = require('react');
const WatchItem = require('./WatchItem');

function WatchPage({ watches = [], user }) {
  return (
    <>
      <p>Наручные часы</p>
      <div className="slider-watch">
        {watches
          .filter((watch) => watch.typeId === 1)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} user={user} />
          ))}
      </div>
      <p>Песочные часы</p>
      <div className="slider-watch">
        {watches
          .filter((watch) => watch.typeId === 2)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} user={user} />
          ))}
      </div>
      <p>Настенные часы</p>
      <div className="slider-watch">
        {watches
          .filter((watch) => watch.typeId === 3)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} user={user} />
          ))}
      </div>
    </>
  );
}

module.exports = WatchPage;
