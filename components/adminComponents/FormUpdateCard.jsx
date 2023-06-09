const React = require('react');
const Layout = require('../Layout');

function FormUpdateCard({ title, watch }) {
  return (
    <Layout title={title} watch={watch}>
      <form id="update-watch" action={`/api/admin/${watch.id}`} method="PUT">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Watch name</label>
          <input value={watch.name} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">TypeId</label>
          <input value={watch.typeId} name="typeId" type="number" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
          <input value={watch.image} name="image" type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input value={watch.description} name="description" type="text" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">Update watch</button>
      </form>
    </Layout>
  );
}

module.exports = FormUpdateCard;
