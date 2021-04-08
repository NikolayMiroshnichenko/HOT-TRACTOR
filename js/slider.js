$(".slick").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".slick-nav",
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: true,
      },
    },
  ],
});
$(".slick-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".slick",
  vertical: true,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 4,
        vertical: false,
      },
    },
  ],
});