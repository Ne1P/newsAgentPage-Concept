
// $('.wrapper').addClass('loaded');

// $('.icon_menu').click(function (event) {
//     $(this).toggleClass('active');
//     $('.menu_body').toggleClass('active');
//     $('body').toggleClass('lock');
// });


$(document).ready(function () {

    $('.nav__icon').click(function (event) {
        $('.nav__icon,.nav__body,.main-screen__content').toggleClass('active');
        $('body').toggleClass('lock');
    });
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();

    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
            elem = $(".under-row__item"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
        // страницу для поиска нужного элемента
        if (windowWidth > 1024) {
            elem.removeClass('ibg');
        }
        else {
            elem.addClass('ibg');
        }
    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function () {
        checkWidth(); // проверит при изменении размера окна клиента
    });

    var video = document.getElementById('myVideo');
    var btn = document.getElementById('btnPlay');

    function playVideo() {
        if (video.paused) {
            video.play();

            btn.innerHTML = "Pause";
            $('.video__btnPlay').addClass('active');
            $('.video__title').addClass('active');
            $('.video__content').addClass('active');
            $('.video__myVideo').addClass('active');

        } else {
            video.pause();
            btn.innerHTML = "Play Now";
            $('.video__btnPlay').removeClass('active');
            $('.video__title').removeClass('active');
            $('.video__content').removeClass('active');
            $('.video__myVideo').removeClass('active');

        }
    }
    btn.addEventListener("click", playVideo);

    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
});


