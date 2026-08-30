$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    var name = $('#contactName').val().trim();
    var email = $('#contactEmail').val().trim();
    var message = $('#contactMessage').val().trim();

    if (!name || !email || !message) {
      $('#contactAlert')
        .removeClass('alert-success')
        .addClass('alert alert-danger')
        .text('Please complete all required fields.')
        .fadeIn();
      return;
    }

    $('#contactSubmitBtn').prop('disabled', true).text('Sending Message...');

    setTimeout(function () {
      $('#contactAlert')
        .removeClass('alert-danger')
        .addClass('alert alert-success')
        .html('Thank you, <strong>' + $('<div>').text(name).html() + '</strong>! Your message has been sent successfully. Our clinic support team will get back to you promptly.')
        .fadeIn();

      $('#contactForm')[0].reset();
      $('#contactSubmitBtn').prop('disabled', false).text('Send Message');
    }, 700);
  });
});
