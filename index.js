$(window).scroll(function () {
    let topScrolledWindow = $(window).scrollTop();
    let classHandler = $.contains('mainNav', 'nav__scrolled');

    if (topScrolledWindow > 0 && classHandler === false) {
        $('#mainNavbar').addClass('nav__scrolled-true');
        $('#mainNavbar').removeClass('nav__scrolled-false');
    } else {
        $('#mainNavbar').removeClass('nav__scrolled-true');
        $('#mainNavbar').addClass('nav__scrolled-false');
    }
});