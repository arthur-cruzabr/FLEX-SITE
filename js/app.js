$('.container-text').hide();
$(window).ready(function () {
  $('.logo').addClass('logo-anime');
  setTimeout(function() {$('.container-text').slideDown()} , 300);
});
