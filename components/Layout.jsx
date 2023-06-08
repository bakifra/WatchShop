const React = require('react');


function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"

        />

        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
        <script defer src="/scripts/auth.js" />
      </head>
      <body>

        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

module.exports = Layout;
