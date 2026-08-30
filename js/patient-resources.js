$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('.resource-card, .download-item-card, .tip-box').on('mouseenter', function () {
    $(this).addClass('active-hover');
  }).on('mouseleave', function () {
    $(this).removeClass('active-hover');
  });
});
