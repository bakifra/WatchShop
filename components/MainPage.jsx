const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <h1>Main page</h1>
    </Layout>
  );
}

module.exports = MainPage;
