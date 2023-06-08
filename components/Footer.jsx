/* eslint-disable react/prop-types */
const React = require('react');

function Footer() {
  return (

    <footer className="footer" id="Contacts">
      <div className="container footer__content">
        <div className="footer__flex">
          <span>
            Все права защищены. Информация на сайте не является публичной офертой.
            <br />
            roma@time.com
          </span>
          <span>

            <br />
            8(800) 555-35-35
          </span>
        </div>
        <div className="footer__flex">
          <span className="footer__text">
            © 2023 Tikiki-Takiki All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

module.exports = Footer;
