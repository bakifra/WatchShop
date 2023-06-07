const React = require('react');
const Layout = require('./Layout');

function WatchPage({ animal, user }) {
  return (
    <Layout user={user}>
      <h1>{animal.name}</h1>
      <img src={animal.image} alt="" />
    </Layout>
  );
}

module.exports = WatchPage;