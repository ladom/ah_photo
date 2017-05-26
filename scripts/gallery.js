var modal = document.querySelector('.modal');
var mainImage = document.querySelector('.modal__img--main');
var galleries = Array.prototype.slice.call(document.querySelectorAll('.gallery__thumb'));
var closeBtn = document.querySelector('.modal__close');
var thumbImages;
var gallery;
var thumbs;


function showGallery(e) {
    gallery = galleries.indexOf(e.currentTarget) + 1;
    thumbs = Array.prototype.slice.call(document.querySelectorAll(`.gallery${gallery} img`));
    var modal = document.querySelector('.modal');
    var modalImgMain = document.querySelector('.modal__img--main');
    var modalThumbs = document.querySelector('.modal__thumbs');
    modalImgMain.src = thumbs[0].dataset.image;
    modalImgMain.dataset.description = thumbs[0].dataset.description;
    modalThumbsAdd();


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

    thumbImages.forEach(img => img.addEventListener('click', changeImage));
}

galleries.forEach(div => div.addEventListener('click', showGallery));

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

function changeImage(e) {
    var pos = thumbImages.indexOf(e.currentTarget);
    hideImage();
    setTimeout(function() {
        mainImage.src = thumbs[pos].dataset.image;
        mainImage.dataset.description = thumbs[pos].dataset.description;
    }, 350);
    setTimeout(showImage, 600);
}

var hideImage = function() {
    mainImage.style.opacity = 0;
};

var showImage = function() {
    mainImage.style.opacity = 1;
};

var leftAngle = document.querySelector('.modal__direction--left');
var rightAngle = document.querySelector('.modal__direction--right');

function leftClick() {
    var number = Number(document.querySelector('.modal__img--main').dataset.description);

    if (number > 1 && number <= thumbImages.length) {
        hideImage();
        setTimeout(function() {
            mainImage.src = thumbs[number - 2].dataset.image;
            mainImage.dataset.description = thumbs[number - 2].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    } else {
        hideImage();
        setTimeout(function() {
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
        setTimeout(function() {
            mainImage.src = thumbs[number].dataset.image;
            mainImage.dataset.description = thumbs[number].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    } else {
        hideImage();
        setTimeout(function() {
            mainImage.src = thumbs[0].dataset.image;
            mainImage.dataset.description = thumbs[0].dataset.description;
        }, 350);
        setTimeout(showImage, 600);
    }

}

rightAngle.addEventListener('click', rightClick);