const React = require("react");
const Layout = require("./Layout");
const WatchPage = require("./WatchPage");

function MainPage({ title, watches }) {
  return (
    <Layout title={title}>
      <h1>Main page</h1>
      <WatchPage watches={watches}/>
    </Layout>
  );
}

module.exports = MainPage;
