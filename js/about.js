$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('.value-card, .tech-card, .milestone-item').on('mouseenter', function () {
    $(this).addClass('active-hover');
  }).on('mouseleave', function () {
    $(this).removeClass('active-hover');
  });
});
