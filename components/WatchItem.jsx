const React = require("react");

function WatchItem({ watch }) {
  return (
    <div className="card">
      <div className="card-image">
        <img className="pic" src={watch.image} alt="watches" />
      </div>
      <div className="description"> {watch.description} </div>
      <div className="name-watch"> {watch.name} </div>
      <button className="btn-make-order" type="button" data-id={watch.id}>
        Хочу такие же
      </button>
      <button className="btn-add" type="button" data-id={watch.id}>
        Update
      </button>
      <button className="btn-update" type="button" data-id={watch.id}>
        Delete
      </button>
      
    </div>
  );
}

module.exports = WatchItem;
