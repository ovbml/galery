/* vars */
const header = document.querySelector('header.header');
const imagesCount = 7
const delay = 10500;
let imageIndex = 1; // start image index


/* change image */
function setHeaderImage(newImageIndex) {
    function setOpacity(opacity) {
        document.querySelector('.header__image_' + imageIndex).
            style.opacity = '' + opacity;
    }
    // hide old image
    setOpacity(0);

    // change image index
    imageIndex = newImageIndex;

    // if the last element
    if ( imageIndex == imagesCount + 1 )
        imageIndex = 1;
    // if the first element
    else if ( imageIndex < 1 )
        imageIndex = imagesCount;

    // and show new image
    setOpacity(1);
}
function prevHedaerImage() {
    setHeaderImage(imageIndex - 1);
}
function nextHeaderImage() {
    setHeaderImage(imageIndex + 1);
}
// auto
setTimeout(function next() {
    nextHeaderImage();
    setTimeout(next, delay);
}, delay);
// pc
header.onclick = function(event) {
    const x = event.screenX;
    const width = header.scrollWidth;
    const percent = 20;
    const clickPart = width * (percent / 100);

    if ( x <= clickPart )
        prevHedaerImage();
    else if ( x >= width - clickPart ) 
        nextHeaderImage();
};
// mobile
let startMovePoint = null;
header.addEventListener(
    'touchmove',
    function(touchEvent) {
        if ( startMovePoint === null )
            startMovePoint = touchEvent.changedTouches[0].clientX;
    }
);
header.addEventListener(
    'touchend',
    function(touchEvent) {
        if ( startMovePoint === null )
            return;

        const endMovePoint = touchEvent.changedTouches[0].clientX;
        if ( startMovePoint - endMovePoint < -100 )
            prevHedaerImage();
        else if ( startMovePoint - endMovePoint > 100 )
            nextHeaderImage();
        startMovePoint = null;
    }
);