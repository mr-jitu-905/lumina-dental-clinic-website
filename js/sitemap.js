$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('#sitemapSearch').on('keyup', function () {
    var query = $(this).val().toLowerCase();

    $('.sitemap-link-list li').each(function () {
      var itemText = $(this).text().toLowerCase();
      if (itemText.indexOf(query) > -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
