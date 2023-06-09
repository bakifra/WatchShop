const React = require('react');

function SliderMain({ watches }) {
  return (
    <>
      <div className="slide">
        <div className="swiper-button-next" />
        <div className="swiper-slide"><img src="/images/photo-1.avif" /></div>
        <div className="swiper-slide"><img src="/images/photo-2.avif" /></div>
        <div className="swiper-slide"><img src="/images/photo-3.avif" /></div>
        <div className="swiper-slide"><img src="/images/photo-4.avif" /></div>
        <div className="swiper-button-prev" />
      </div>

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
