const React = require('react');
const Layout = require('./Layout');
const WatchItem = require('./WatchItem');
// const FormAddWatch = require('./FormAddWatch');

function Watchs({ title, animals = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Watchs Page</h1>
      <FormAddWatch />
      <div className="animals_list">
        {animals.map((animal) => (
          <WatchItem animal={animal} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Watchs;