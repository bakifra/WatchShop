const React = require('react');
// const Layout = require('./Layout');

function AdminNavBar() {
  return (
    <nav className="navigator-Bar">
      <div className="wrapper">
        <div className="group1">
          <button type="button" className="btn btn-main">
            Main
          </button>
        </div>
        <div className="group2">
          <button type="button" className="btn btn-add-watch">
            AddWatch
          </button>
          <button type="button" className="btn btn-orders">
            Orders
          </button>
        </div>
        <div className="group3">
          <button type="button" className="btn btn-logout">
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
}

module.exports = AdminNavBar;
