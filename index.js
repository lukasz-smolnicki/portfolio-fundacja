$(window).scroll(function () {
    let top = $(window).scrollTop();
    let find_class_small = $.contains('mainNav', 'nav__scrolled');

    if (top > 0 && find_class_small == false) {
        $('#mainNavbar').addClass('nav__scrolled-true');
        $('#mainNavbar').removeClass('nav__scrolled-false');
    } else {
        $('#mainNavbar').removeClass('nav__scrolled-true');
        $('#mainNavbar').addClass('nav__scrolled-false');
    }
});