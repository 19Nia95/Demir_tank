$('.productLists').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,

    autoplay: true,
    autoplaySpeed: 2000,

    easing: 'linear',

    swipeToSlide: false,

});
  

(() => {
  let $ = el => document.querySelector(el);
  
  $(".animenu__btn").addEventListener("click", function () {
    this.classList.toggle("animenu__btn--active")
    $(".animenu__nav").classList.toggle("animenu__nav--active")
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0)
        $('#toTop').fadeIn();
    else
        $('#toTop').fadeOut();
  });
  
  $('#toTop').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 300);
  })

});



// window.onload = function () {
//   var h = $(document).height();
//   $('.choice').animate({ height: h + 'px', overflow: 'none' }, 10000);
// };
