const React = require("react");
const NavBar = require("./NavBar");
const Layout = require("./Layout");
const WatchPage = require("./WatchPage");
const FeedbackForm = require("./feedbackForm");
const About = require("./About");
const Footer = require("./Footer");
// const Slider = require("./Slider");
const SliderMain = require('./SliderMain');

function MainPage({ title, watches }) {
  return (
    <Layout title={title}>
      <NavBar />
      <SliderMain/>
      {/* <p>Последняя изготовленная модель</p> */}
      {/* <Slider watches={watches} /> */}
      <WatchPage watches={watches} />
      <About />
      <FeedbackForm />
      <Footer />
    </Layout>
  );
}

module.exports = MainPage;
