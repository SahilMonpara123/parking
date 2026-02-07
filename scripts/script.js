$(document).ready(function () {
  /* start :: testimonial-js */
  if (jQuery(".testimonial-section .swiper-slide").length > 1) {
    var swiper = new Swiper(".testimonail-slider", {
      loop: true,
      speed: 1500,
      autoplay: true,
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
      },
    });
  }
  /* end :: testimonial-js */

  /* start :: media-mention-js */
  if (jQuery(".media-section .swiper-slide").length > 1) {
    var swiper = new Swiper(".media-swiper-slider", {
        loop: true,
        speed: 1500,
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 20, // Adds a gap between slides
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10, // Adjust gap for smaller screens
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15, // Adjust gap for medium screens
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20, // Adjust gap for larger screens
            },
        },
    });
  }
  /* end :: media-mention-js */

  /* start :: believe-slider */

  if (jQuery(".believe-section .swiper-slide").length > 1) {
    var swiper = new Swiper(".believe-slider", {
      direction: "vertical",

      autoplay: true,

      loop: true,

      effect: "fade",

      speed: 400,
    });
  }

  /*   end :: believe-slider */

  //   start :: fancybox

  $('[data-fancybox="gallery"]').fancybox({
    loop: true,

    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  /*   start :: fancybox */
});

/* start :: tab */

jQuery(".tab-nav .button").click(function () {
  var _tab = jQuery(this).attr("data-tab-target");

  jQuery(".tab-nav .button").removeClass("is-active");

  jQuery(this).addClass("is-active");

  jQuery(".tab-content .tab-target").removeClass("is-active");

  jQuery("#" + _tab).addClass("is-active");
});

/* end :: tab */
