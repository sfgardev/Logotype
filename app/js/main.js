$(function(){

  $('.header-slider').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
  });

  $('.slider').slick({

    slidesToShow: 4,
    // autoplay: true,
  });

  $('.news-slider').slick({

    slidesToShow: 3,
    // autoplay: true,
  });

  $('.catalog').on('click', function(){
    $('.catalog-menu').slideToggle();
    $('.catalog').toggleClass('active');
  });

});