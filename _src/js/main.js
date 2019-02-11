import $ from 'jquery';
import Swiper from 'swiper';


$(document).ready(function() {

  var headSlider = new Swiper('#head-slider', {
    autoplay: {
      delay: 4000
    },
    initialSlide: 0,
    preloadImages: true,
    speed: 1500,
    slidesPerView: 1,
    numberOfSlides: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.js-slider-next',
      prevEl: '.js-slider-prev',
    },
    pagination: {
      el: '#head-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  var categoriesSlider = new Swiper('#categories-slider', {
    speed: 400,
    slidesPerView: 6,
    spaceBetween: 24,
    navigation: {
      nextEl: '#categories-next',
      prevEl: '#categories-prev',
    },
    // breakpoints: {
    //   767: {
    //     slidesPerView: 1,
    //     spaceBetween: 40
    //   },
    //   991: {
    //     slidesPerView: 2
    //   },
    //   1279: {
    //     slidesPerView: 3
    //   }
    // }
  });

  var productSlider = new Swiper('#product-slider', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '#product-next',
      prevEl: '#product-prev',
    },
    // breakpoints: {
    //   767: {
    //     slidesPerView: 1,
    //     spaceBetween: 40
    //   },
    //   991: {
    //     slidesPerView: 2
    //   },
    //   1279: {
    //     slidesPerView: 3
    //   }
    // }
  });

  var networkSlider = new Swiper('#network-slider', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '#network-next',
      prevEl: '#network-prev',
    },
    // breakpoints: {
    //   767: {
    //     slidesPerView: 1,
    //     spaceBetween: 40
    //   },
    //   991: {
    //     slidesPerView: 2
    //   },
    //   1279: {
    //     slidesPerView: 3
    //   }
    // }
  });

  var offerSlider = new Swiper('#offer--slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '#offer-next',
      prevEl: '#offer-prev',
    },
    // breakpoints: {
    //   767: {
    //     slidesPerView: 1,
    //     spaceBetween: 40
    //   },
    //   991: {
    //     slidesPerView: 2
    //   },
    //   1279: {
    //     slidesPerView: 3
    //   }
    // }
  });


  // Cookies

  $('.js-cookies-btn').click(function () {

    $('.js-cookies-bar').fadeToggle();

  });

});