const React = require('react');
const WatchItem = require('../WatchItem');

function AdminCardsPage({ watches = [] }) {
  return (
    <div className="cards-list">
      <div className="slider-watch type1 ">
        <p>Наручные часы</p>
        {watches
          .filter((watch) => watch.typeId === 1)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
      <div className="slider-watch type2">
        <p>Песочные часы</p>
        {watches
          .filter((watch) => watch.typeId === 2)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
      <div className="slider-watch type3">
        <p>Настенные часы</p>
        {watches
          .filter((watch) => watch.typeId === 3)
          .map((watch) => (
            <WatchItem key={watch.id} watch={watch} />
          ))}
      </div>
    </div>
  );
}

module.exports = AdminCardsPage;
