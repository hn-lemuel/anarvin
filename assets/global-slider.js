// Product Categories
jQuery(document).ready(function ($) {
  $(".global-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Media Slider
$(".slider-for-product-media-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav-product-media-slider",
});
$(".slider-nav-product-media-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for-product-media-slider",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});

// End Product Categories
