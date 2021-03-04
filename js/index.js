const mainSlide = document.getElementById('main-slide');
const mainImgBox02 = document.getElementsByClassName('main-img-box-02');
const mainSlideBtnPrev = document.getElementById('prev-btn');
const mainSlideBtnNext = document.getElementById('next-btn');

mainSlideBtnPrev.addEventListener('click', function clicked() {
    var style = window.getComputedStyle(mainSlide)
    var mainSlideTrlX = (new WebKitCSSMatrix(style.transform)).m41;
    
    if (mainSlideTrlX >= -602 && mainSlideTrlX < 0)
        mainSlide.style.transform = 'translate3d(0px, 0px, 0px)';
    else if(mainSlideTrlX >= -1204 && mainSlideTrlX < -602)
        mainSlide.style.transform = 'translate3d(-602px, 0px, 0px)';
    else if(mainSlideTrlX >= -1804 && mainSlideTrlX <= -1204)
        mainSlide.style.transform = 'translate3d(-1204px, 0px, 0px)';
    else if(mainSlideTrlX >= -2406 && mainSlideTrlX <= -1804)
        mainSlide.style.transform = 'translate3d(-1804px, 0px, 0px)';
    else
        return;
});
mainSlideBtnNext.addEventListener('click', function clicked() {
    var style = window.getComputedStyle(mainSlide)
    var mainSlideTrlX = (new WebKitCSSMatrix(style.transform)).m41;

    if (mainSlideTrlX > -602 && mainSlideTrlX <= 0)
        mainSlide.style.transform = 'translate3d(-602px, 0px, 0px)';
    else if(mainSlideTrlX > -1204 && mainSlideTrlX <= -602)
        mainSlide.style.transform = 'translate3d(-1204px, 0px, 0px)';
    else if(mainSlideTrlX > -1804 && mainSlideTrlX <= -1204)
        mainSlide.style.transform = 'translate3d(-1804px, 0px, 0px)';
    else if(mainSlideTrlX > -2406 && mainSlideTrlX <= -1804)
        mainSlide.style.transform = 'translate3d(-2406px, 0px, 0px)';
    else
        return;
});
