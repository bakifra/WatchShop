const React = require('react');
const Layout = require('./Layout');

function About({ title }) {
  return (
    <Layout title={title}>
      <h2> Кто я? </h2>
      <div className="article">
        <p className="article-text">
          Рома - талантливый часовщик-самоучка, который всегда мечтал
          развиваться в этом направлении и наконец-то решил осуществить свою
          мечту, открыв свой собственный магазин по изготовлению часов. Он
          увлекается изучением различных материалов и технологий, делая акцент на
          применение качественных и экологичных материалов. Он стремится создавать
          настоящие произведения искусства, которые не только надежны в
          использовании, но и имеют элегантный и стильный дизайн. Рома всегда
          считал, что каждый час может быть уникальным и отражать индивидуальность
          своего обладателя, так что он предлагает своим клиентам различные
          варианты персонализации, в том числе использование специальных нанесений
          и гравировок. Он уверен, что его магазин станет местом, где каждый
          сможет найти свой идеальный часовой механизм, сделанный из экологичных и
          качественных материалов, и при этом по разумной цене.
        </p>
        <img className="portret" src="/images/Roman.jpg" alt="Ромочка" />
      </div>
    </Layout>
  );
}

module.exports = About;