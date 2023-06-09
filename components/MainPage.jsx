const React = require('react');
const Layout = require('./Layout');
const WatchPage = require('./WatchPage');
const FeedbackForm = require('./FeedbackForm');

function MainPage({ title, watches }) {
  return (
    <Layout title={title}>
      <h1>Main page</h1>
      <WatchPage watches={watches} />
      <FeedbackForm />
    </Layout>
  );
}

module.exports = MainPage;
