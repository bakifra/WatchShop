const React = require('react');

function Slider({ watches }) {
  const watches1 = watches.filter((watch) => watch.typeId === 1);
  const watches2 = watches.filter((watch) => watch.typeId === 2);
  const watches3 = watches.filter((watch) => watch.typeId === 3);
  return (
  // <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
  //   <div className="carousel-indicators">
  //     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
  //     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
  //     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
  //   </div>
  //   <div className="carousel-inner">
  //     <div className="carousel-item active">
  //       <img src={watches1[0].image} className="d-block w-100" alt="..." />
  //       <div className="carousel-caption d-none d-md-block">
  //         <h5>First slide label</h5>
  //         <p>Some representative placeholder content for the first slide.</p>
  //       </div>
  //     </div>
  //     <div className="carousel-item">
  //       <img src={watches1[1].image} className="d-block w-100" alt="..." />
  //       <div className="carousel-caption d-none d-md-block">
  //         <h5>Second slide label</h5>
  //         <p>Some representative placeholder content for the second slide.</p>
  //       </div>
  //     </div>
  //     <div className="carousel-item">
  //       <img src={watches1[2].image} className="d-block w-100" alt="..." />
  //       <div className="carousel-caption d-none d-md-block">
  //         <h5>Third slide label</h5>
  //         <p>Some representative placeholder content for the third slide.</p>
  //       </div>
  //     </div>
  //   </div>
  //   <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true" />
  //     <span className="visually-hidden">Previous</span>
  //   </button>
  //   <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true" />
  //     <span className="visually-hidden">Next</span>
  //   </button>
  // </div>

    <div className="my-slider container" id="Examples">
      <h2 className="my-slider__title">Sensuality and style</h2>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          {watches.map((el, i) => (
            <div
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
              data-bs-interval="8000"
              key={el.id}
            >
                <div className='img-divchik'>
              <img
                src={el.dataValues.image}
                className="d-block my-slider__style"
                alt="img"
              />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>{el.dataValues.title}</h5>
                <p>{el.dataValues.note}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>

  );
}

module.exports = Slider;
