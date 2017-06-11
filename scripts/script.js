'use strict';

$(document).ready(function () {
    $('.navBar__header--menuBtn').click(function () {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });

    $('#aboutBtn, #offerBtn, #galleryBtn, #sessionBtn, #contactBtn').click(function () {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });
});

var nav = document.querySelector('nav');
var navSize = function navSize() {
    return nav.offsetHeight;
};

window.addEventListener('resize', navSize);

$('a[href^="#"]').on('click', function (event) {

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
        galleryList.style.left = rect.left + 'px';
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

    oldPaper.style.marginTop = h + 120 + 'px';
}

window.addEventListener('resize', setJumboMargin);
setJumboMargin();
var modal = document.querySelector('.modal');
var mainImage = document.querySelector('.modal__img--main');
var galleries = Array.prototype.slice.call(document.querySelectorAll('.gallery__thumb'));
var closeBtn = document.querySelector('.modal__close');
var buttons = Array.prototype.slice.call(document.querySelectorAll('.gallery__list li'));
var thumbImages;
var gallery;
var thumbs;

function showGallery(e) {
    gallery = galleries.indexOf(e.currentTarget) + 1;

    thumbs = Array.prototype.slice.call(document.querySelectorAll('.gallery' + gallery + ' img'));

    var modal = document.querySelector('.modal');
    var modalImgMain = document.querySelector('.modal__img--main');
    var modalThumbs = document.querySelector('.modal__thumbs');
    modalImgMain.src = thumbs[0].dataset.image;
    modalImgMain.dataset.description = thumbs[0].dataset.description;
    modalThumbsAdd();
    thumbsLight();

    function modalThumbsAdd() {
        var oldModalThumbs = Array.prototype.slice.call(document.querySelectorAll('.modal__thumbs img'));
        for (var l = 0; l < oldModalThumbs.length; l++) {
            modalThumbs.removeChild(oldModalThumbs[l]);
        }
        for (var a = 0; a < thumbs.length; a++) {
            var img = document.createElement('img');
            img.classList.add('modal__thumb');
            img.src = thumbs[a].src;
            modalThumbs.appendChild(img);
        }
    }

    modal.style.display = 'block';
    document.querySelector('.modal__thumbs').scrollLeft = 0;
    thumbImages = Array.prototype.slice.call(document.querySelectorAll('.modal__thumb'));

    thumbImages.forEach(function (img) {
        return img.addEventListener('click', changeImage);
    });
}

function thumbsLight() {
    var currentThumb = document.querySelectorAll('.modal__thumb');
    var currentImg = document.querySelector('.modal__img--main');
    var place = Number(currentImg.dataset.description) - 1;

    for (var a = 0; a < currentThumb.length; a++) {
        currentThumb[a].style.opacity = '0.6';
        currentThumb[a].style.boxShadow = 'none';
    }

    currentThumb[place].style.opacity = '1';
    currentThumb[place].style.boxShadow = '0 0 5px #f095d9';
    currentThumb[place].scrollIntoView();
}

function showGalleryFromList(e) {
    gallery = buttons.indexOf(e.currentTarget) + 1;

    thumbs = Array.prototype.slice.call(document.querySelectorAll('.gallery' + gallery + ' img'));

    var modal = document.querySelector('.modal');
    var modalImgMain = document.querySelector('.modal__img--main');
    var modalThumbs = document.querySelector('.modal__thumbs');
    modalImgMain.src = thumbs[0].dataset.image;
    modalImgMain.dataset.description = thumbs[0].dataset.description;
    modalThumbsAdd();
    thumbsLight();

    function modalThumbsAdd() {
        var oldModalThumbs = Array.prototype.slice.call(document.querySelectorAll('.modal__thumbs img'));
        for (var l = 0; l < oldModalThumbs.length; l++) {
            modalThumbs.removeChild(oldModalThumbs[l]);
        }
        for (var a = 0; a < thumbs.length; a++) {
            var img = document.createElement('img');
            img.classList.add('modal__thumb');
            img.src = thumbs[a].src;
            modalThumbs.appendChild(img);
        }
    }

    modal.style.display = 'block';
    document.querySelector('.modal__thumbs').scrollLeft = 0;
    thumbImages = Array.prototype.slice.call(document.querySelectorAll('.modal__thumb'));

    thumbImages.forEach(function (img) {
        return img.addEventListener('click', changeImage);
    });
}

galleries.forEach(function (div) {
    return div.addEventListener('click', showGallery);
});

buttons.forEach(function (li) {
    return li.addEventListener('click', showGalleryFromList);
});

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

function changeImage(e) {
    var pos = thumbImages.indexOf(e.currentTarget);
    hideImage();
    setTimeout(function () {
        mainImage.src = thumbs[pos].dataset.image;
        mainImage.dataset.description = thumbs[pos].dataset.description;
    }, 350);
    setTimeout(showImage, 600);
}

var hideImage = function hideImage() {
    mainImage.style.opacity = 0;
};

var showImage = function showImage() {
    mainImage.style.opacity = 1;
    thumbsLight();
};

var leftAngle = document.querySelector('.modal__direction--left');
var rightAngle = document.querySelector('.modal__direction--right');

function leftClick() {
    var number = Number(document.querySelector('.modal__img--main').dataset.description);

    if (number > 1 && number <= thumbImages.length) {
        hideImage();
        setTimeout(function () {
            mainImage.src = thumbs[number - 2].dataset.image;
            mainImage.dataset.description = thumbs[number - 2].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    } else {
        hideImage();
        setTimeout(function () {
            mainImage.src = thumbs[thumbs.length - 1].dataset.image;
            mainImage.dataset.description = thumbs[thumbs.length - 1].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    }
}

leftAngle.addEventListener('click', leftClick);

function rightClick() {
    var number = Number(document.querySelector('.modal__img--main').dataset.description);

    if (number >= 1 && number < thumbImages.length) {
        hideImage();
        setTimeout(function () {
            mainImage.src = thumbs[number].dataset.image;
            mainImage.dataset.description = thumbs[number].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    } else {
        hideImage();
        setTimeout(function () {
            mainImage.src = thumbs[0].dataset.image;
            mainImage.dataset.description = thumbs[0].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    }
}

rightAngle.addEventListener('click', rightClick);