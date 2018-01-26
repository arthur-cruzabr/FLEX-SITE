$('.container-text').hide();
$(window).ready(function () {
  $('.logo').addClass('logo-anime');
  setTimeout(function() {$('.container-text').slideDown()} , 300);
});

$('.menu a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var scroll = $(id).offset().top;
    $('html, body').animate({
       scrollTop: scroll
    });
});
