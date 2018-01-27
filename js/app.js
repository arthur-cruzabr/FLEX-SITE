$(window).on('load', function () {
    $('.caregando').fadeOut();
    $('.container-pai').fadeIn();
});

$('.container-text').hide();
$(window).on('load', function () {
    setTimeout(function () {
        $('.logo').addClass('logo-anime');
        setTimeout(function () {
            $('.container-text').slideDown()
        }, 300);
    }, 300);
});

$('.menu a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var scroll = $(id).offset().top;
    $('html, body').animate({
        scrollTop: scroll
    }, 500);
});

$(window).scroll(function () {
    var top = $(this).scrollTop();
    var sobre = Math.round($('.sobre').offset().top);
    console.log(top);
    console.log(sobre);
    if (top >= sobre) {
        setTimeout(function () {
            $('.menu-container').hide();
            $('.menu-container').css({
                position: 'fixed',
                background: 'black'
            });
            $('.menu-container').slideDown();
        }, );
    } else {
        //        $('.menu').removeClass('anime');
        $('.menu-container').show();
        $('.menu-container').css({
            position: 'static',
            background: 'none',
            height: '100px'
        });

    }
});
