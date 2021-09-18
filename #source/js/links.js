/* vars init */
const toup = document.querySelector('.footer__up');

const todescription = document.querySelector('.footer__description');
const description = document.querySelector('.description');

const togalery = document.querySelector('.footer__galery');
const galery = document.querySelector('.galery');

const tocontacts = document.querySelectorAll('.description__link');

/* functions init */
function animScrollY(to, speed = 10, delay = 10) {
    // vars init
    const start = window.pageYOffset || document.documentElement.scrollTop;
    const difference = to - start;

    // -1 -- to top, 1 -- to bottom
    if ( Math.sign(speed) !== Math.sign(difference) )
        speed *= -1;

    // safety
    if ( speed === 0 || difference === 0 )
        return;

    if ( Math.abs(difference) > Math.abs(speed) ) {
        window.scrollBy(0, speed);

        const new_ = window.pageYOffset || document.documentElement.scrollTop;
        // if the top or the bottom of the page
        if ( new_ === start )
            return;

        setTimeout(animScrollY, delay, to, speed, delay);
    } else
        window.scrollBy(0, difference);
}
function animScrollYTime(to, time = 300, delay = 10) {
    const start = window.pageYOffset || document.documentElement.scrollTop;
    const difference = to - start;
    const speed = difference / ( time / delay );

    animScrollY(to, speed, delay);
}


/* onclick init */
toup.onclick = function() {
    animScrollYTime(0, 150);
};
todescription.onclick = function() {
    const to = getTopOffsetOf(description);
    animScrollYTime(to, 150);
};
togalery.onclick = function() {
    const to = getTopOffsetOf(galery);
    animScrollYTime(to, 150);
}
/*tocontacts.forEach(function(item) {
    item.onclick = function() {
        const to = getTopOffsetOf(contacts);
        animScrollYTime(to, 200);
    };
});*/