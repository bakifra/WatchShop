const React = require('react');

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active">
                Наручные часы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                Песочные часы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                Настенные часы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                Обо мне
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                Связаться
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

module.exports = NavBar;
