$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('.service-card, .trust-card, .why-card, .team-card').on('mouseenter', function () {
    $(this).addClass('active-hover');
  }).on('mouseleave', function () {
    $(this).removeClass('active-hover');
  });

  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 90
      }, 600);
    }
  });
});
