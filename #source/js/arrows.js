let blockArrowAnim = false;

document.querySelector('.one-image-galery__arrow_prev').onclick = function() {
    rotateArrow('rotate-prev-arrow', this);
    prevImg();
};
document.querySelector('.one-image-galery__arrow_next').onclick = function() {
    rotateArrow('rotate-next-arrow', this);
    nextImg();
};

function rotateArrow(animName, element) {
    if ( blockArrowAnim )
        return;

    blockArrowAnim = true;

    element.style.animationName = animName;
    element.style.animationPlayState = 'running';

    setTimeout(function(element) {
        element.style.animationName = '';
        blockArrowAnim = false;
    }, 1000, element);
}