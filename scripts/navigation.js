$(document).ready(function() {
    $('.navBar__header--menuBtn').click(function() {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });

    $('#aboutBtn, #offerBtn, #galleryBtn, #sessionBtn, #contactBtn').click(function() {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });
});

var nav = document.querySelector('nav');
var navSize = function() {
    return nav.offsetHeight;
};

window.addEventListener('resize', navSize);


$('a[href^="#"]').on('click', function(event) {

    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - navSize() - 10
        }, 1000);
    }
});