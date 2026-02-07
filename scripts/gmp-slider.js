$(document).ready(function(){

    $('.home__hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false
    });

    $('.media-slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.award-slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.parking-operator-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $('.parking__operator-slider').slick({
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
    });

    $('.express-slider').slick({
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '40px',
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '40px',
              }
            }
        ]
    });

    $('.team-slider').slick({
      // centerMode: true,
      centerPadding: '0',
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 4,
      autoplay: true,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 2,
            dots: false,
            slidesToShow: 6
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            dots: false,
            slidesToShow: 4
          }
        }
      ]
    });

    $('.our-values-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false
    });

    $('.testimonials-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true
    });

    if(screen.width < 769) {
        $('.platform-tab-slider').slick({
            centerPadding: '10',
            autoplay: false,
            draggable: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: false,
            arrows: false,
            dots: true,
        });
    }

});
