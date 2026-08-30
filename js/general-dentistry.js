$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('.treatment-card, .step-card').on('mouseenter', function () {
    $(this).addClass('active-hover');
  }).on('mouseleave', function () {
    $(this).removeClass('active-hover');
  });
});
