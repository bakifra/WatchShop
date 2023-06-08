const React = require("react");
const Layout = require("./Layout");

function LogoForm({ title }) {
  return (
    <Layout title={title}>
      <form id="log-form" action="/api/admin/log" method="POST">
        <div className="mb-3">
          <label htmlFor="exampename1" className="form-label">
            login
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <h1 style={{ color: "red" }} className="error" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}

module.exports = LogoForm;
