import $ from "jquery";

/* default code of the file */

if ($(".owl-carousel").length) {
  $(".owl-carousel").owlCarousel({
    stagePadding: 10,
    dots: false,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        stagePadding: 300,
        items: 1,
      },
    },
  });
}
