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

var galleryList = document.querySelector('.gallery__list');

function showGalleryList() {
    if (window.innerWidth > 600) {
        var gallBtn = document.getElementById('galleryBtn');
        var rect = gallBtn.getBoundingClientRect();
        galleryList.style.left = `${rect.left}px`;
        galleryList.style.display = "block";
    }
}

document.querySelector('.galeria').addEventListener('mouseover', showGalleryList);

function hideGalleryList() {
    galleryList.style.display = "none";
}

document.querySelector('.galeria').addEventListener('mouseout', hideGalleryList);
hideGalleryList();

// Ustawianie marginesu dla Jumbotron'a górnego

var logo;
var oldPaper;

function setJumboMargin() {
    logo = document.querySelector('.logo');
    oldPaper = document.querySelector('.oldPaper');
    var h = logo.offsetHeight;

    oldPaper.style.marginTop = `${h + 120}px`;
}

window.addEventListener('resize', setJumboMargin);
setJumboMargin();