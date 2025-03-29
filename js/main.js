$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-menu, .header-burger').toggleClass('active-menu');
  });
});

/* *****for fullscreen***** */
function ibg() {

  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();

// **************header-gallery**************
$('.carousel-header').carousel({
  pause: false,
});


// **************slick-home**************
$('.partners-slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});



