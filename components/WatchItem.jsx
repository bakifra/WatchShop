const React = require('react');

function WatchItem({ watch, user }) {
  return (
    
    <div className="card" data-id={watch.id}>
      <div className="card-image">
        <img className="pic" src={watch.image} alt="watches" />
      </div>
      <div className="description">
        {' '}
        {watch.description}
        {' '}
      </div>
      <div className="name-watch">
        {' '}
        {watch.name}
        {' '}
      </div>
      <button className="btn-make-order" type="button" data-id={watch.id}>
        Хочу такие же
      </button>
      {user && (
        <>
          <button type="button">
            <a href={`/api/admin/${watch.id}`}> Update  </a>
          </button>
          <button className="btn-delete" type="button" data-id={watch.id}>
            Delete
          </button>
        </>
      )}

    </div>
  );
}

module.exports = WatchItem;
