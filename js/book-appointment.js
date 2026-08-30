$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });

  var urlParams = new URLSearchParams(window.location.search);
  var serviceParam = urlParams.get('service');
  var doctorParam = urlParams.get('doctor');

  if (serviceParam) {
    $('#serviceSelect').val(serviceParam);
  }
  if (doctorParam) {
    $('#doctorSelect').val(doctorParam);
  }

  var today = new Date().toISOString().split('T')[0];
  $('#appointmentDate').attr('min', today);

  $('#appointmentForm').on('submit', function (e) {
    e.preventDefault();

    var name = $('#patientName').val().trim();
    var phone = $('#patientPhone').val().trim();
    var email = $('#patientEmail').val().trim();
    var date = $('#appointmentDate').val();
    var time = $('#appointmentTime').val();
    var service = $('#serviceSelect').val();

    if (!name || !phone || !email || !date || !time || !service) {
      $('#formFeedback')
        .removeClass('alert-success')
        .addClass('alert alert-danger')
        .text('Please fill in all required fields.')
        .fadeIn();
      return;
    }

    $('#submitBtn').prop('disabled', true).text('Submitting Request...');

    setTimeout(function () {
      $('#formFeedback')
        .removeClass('alert-danger')
        .addClass('alert alert-success')
        .html('Thank you, <strong>' + $('<div>').text(name).html() + '</strong>! Your appointment request for <strong>' + $('<div>').text(service).html() + '</strong> on ' + date + ' (' + time + ') has been received. Our team will contact you shortly to confirm.')
        .fadeIn();

      $('#appointmentForm')[0].reset();
      $('#submitBtn').prop('disabled', false).text('Confirm Appointment Request');

      $('html, body').animate({
        scrollTop: $('#formFeedback').offset().top - 100
      }, 400);
    }, 800);
  });
});
