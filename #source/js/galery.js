/* vars */

/* show fist img */
// JS is on
galeryData.oneImgBlock.img.alt = 'Фотография';

// image count
galeryData.oneImgBlock.photoCount.innerText = galeryData.imagesCount;

/*// title
galeryData.oneImgBlock.title.innerText =
    galeryData[galeryData.currentImgIndex].title;
// img
galeryData.oneImgBlock.img.src =
    galeryData.folderPath + galeryData.currentImgIndex + '.webp';
// link a
galeryData.oneImgBlock.a.href =
    galeryData.folderPath + galeryData.currentImgIndex + '.webp';*/

const searchImageIndex = hrefTools.search.get().image;

if ( !isNaN(searchImageIndex) )
    setImage(+searchImageIndex);
else
    setImage(galeryData.currentImgIndex);

/* image change */
function setImage(imgIndex) {
    // vars init
    const title = galeryData.oneImgBlock.title;
    const img_container = galeryData.oneImgBlock.img_container;
    const img = galeryData.oneImgBlock.img;
    const a = galeryData.oneImgBlock.a;
    const imagesCount = galeryData.imagesCount;

    // looping galery
    if ( galeryData.loop ) {
        if ( imgIndex < 1 )
            imgIndex = imagesCount;
        else if ( imgIndex > imagesCount )
            imgIndex = 1;
    } else if ( imgIndex < 1 || imgIndex > imagesCount )
        return

    // search update
    hrefTools.search.set({image: imgIndex});

    // hide
    title.classList.add('_change');
    img_container.classList.add('_change');

    setTimeout(function() {
        // clear "auto" value
        img_container.style.height = img.scrollHeight + 20 + 'px';

        // change imgIndex 
        galeryData.currentImgIndex = imgIndex;
        galeryData.oneImgBlock.photoNumber.value = galeryData.currentImgIndex;

        // img and img title change
        title.innerText = galeryData[imgIndex].title;
        img.src = galeryData.folderPath + imgIndex + '.webp';
        a.href = galeryData.folderPath + imgIndex + '.webp';

        // height change (for transition animation)
        img_container.style.height = img.scrollHeight + 20 + 'px';

        setTimeout(function() {
            img_container.style.height = 'auto';
            // show
            title.classList.remove('_change');
            img_container.classList.remove('_change');
        }, 400);
    }, 300);
}
function nextImg() {
    setImage(galeryData.currentImgIndex + 1);
}
function prevImg() {
    setImage(galeryData.currentImgIndex - 1);
}
galeryData.oneImgBlock.photoNumber.onchange = function() {
    let value = +this.value;
    if ( isNaN(value) || value < 1 || value > galeryData.imagesCount)
        return this.value = galeryData.currentImgIndex;

    setImage(value);
};


/* image scroll and zoom */
function addOnWheel(elem, handler) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
            // outdated version
            elem.addEventListener("mousewheel", handler);
        } else {
            // 3.5 <= Firefox < 17
            // older DOMMouseScroll ignored
            elem.addEventListener("MozMousePixelScroll", handler);
        }
    } else { 
        // IE8-
        elem.attachEvent("onmousewheel", handler);
    }
}
addOnWheel(galeryData.oneImgBlock.img_container, function(event) {
    const delta = (event.deltaY || event.detail || event.wheelDelta) / 1000;
    const maxScale = galeryData.maxScale;
    const minScale = galeryData.minScale;
    let scale = galeryData.scale;

    scale -= delta;
    if ( delta > 0 )
        scale = Math.max(minScale, scale);
    else
        scale = Math.min(maxScale, scale);

    // page scrolling
    if ( event.altKey )
        return

    galeryData.scale = scale;
    galeryData.oneImgBlock.img.style.transform = `scale(${scale})`;

    event.preventDefault();
    this.onmousemove(event);
});
galeryData.oneImgBlock.img_container.onmousemove = function(event, reverse = 1) {
    const img = galeryData.oneImgBlock.img;
    const img_container = galeryData.oneImgBlock.img_container;

    let k = (galeryData.maxScale - galeryData.scale) * 5;
    k = Math.max(k, .4);

    const rect = img_container.getBoundingClientRect();
    const x = (event.clientX - rect.x - (img_container.clientWidth / 2)) / k;
    const y = (event.clientY - rect.y - (img_container.clientHeight / 2)) / k;

    img.style.right = Math.min(Math.abs(x), img_container.clientWidth / 2) * Math.sign(x) * reverse + 'px';
    img.style.bottom = Math.min(Math.abs(y), img_container.clientHeight / 2) * Math.sign(y) * reverse + 'px';
};
galeryData.oneImgBlock.img_container.onmouseleave = function() {
    galeryData.oneImgBlock.img.style.transform = '';
    galeryData.oneImgBlock.img.style.right = '';
    galeryData.oneImgBlock.img.style.bottom = '';
    galeryData.scale = galeryData.initScale;
};
// mobile
galeryData.oneImgBlock.img_container.addEventListener(
    'touchmove',
    function(touchEvent) {
        if ( touchEvent.targetTouches.length == 1 ) {
            const event = {
                clientX: touchEvent.targetTouches[0].clientX,
                clientY: touchEvent.targetTouches[0].clientY,
            };
            this.onmousemove(event, -1);
        } else if ( touchEvent.targetTouches.length == 2 ) {
            const coefficient = galeryData.maxScale / 300;

            const cords1 = {
                x: touchEvent.targetTouches[0].clientX,
                y: touchEvent.targetTouches[0].clientY,
            };
            const cords2 = {
                x: touchEvent.targetTouches[1].clientX,
                y: touchEvent.targetTouches[1].clientY,
            };
            const distance = Math.sqrt(
                (cords2.x - cords1.x) ** 2 +
                (cords2.y - cords1.y) ** 2
            );

            let scale = distance * coefficient;

            if ( scale < galeryData.minScale ) 
                scale = galeryData.minScale;
            else if ( scale > galeryData.maxScale )
                scale = galeryData.maxScale;

            galeryData.scale = scale;
            galeryData.oneImgBlock.img.style.transform = `scale(${scale})`;

            this.onmousemove(event);
        }

        this.classList.add('_hover');
        touchEvent.preventDefault();
    }
);
galeryData.oneImgBlock.img_container.addEventListener(
    'touchend',
    function(touchEvent) {
        if ( touchEvent.targetTouches.length > 0 )
            return;
        this.classList.remove('_hover');
        this.onmouseleave();
    }
);