const React = require('react');

function SliderMain({ watches }) {
  return (
    <>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src="https://miro.medium.com/max/1400/1*BR2RiTRoYor9xSrzEgxLWQ.jpeg" /></div>
          <div className="swiper-slide"><img src="https://fireseo.ru/wp-content/uploads/2022/06/programming.jpeg" /></div>
          <div className="swiper-slide"><img src="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?w=2000" /></div>
          <div className="swiper-slide">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg
        "
            />

          </div>
          <div className="swiper-slide"><img src="https://img.freepik.com/premium-vector/minimalist-shape-background_112769-210.jpg" /></div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />

      {/* <script>
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  </script> */}
    </>
  );
}

module.exports = SliderMain;
