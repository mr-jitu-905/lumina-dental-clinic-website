$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');

    if (filterValue === 'all') {
      $('.blog-item-col').fadeIn(300);
    } else {
      $('.blog-item-col').hide();
      $('.blog-item-col[data-category="' + filterValue + '"]').fadeIn(300);
    }
  });
});
