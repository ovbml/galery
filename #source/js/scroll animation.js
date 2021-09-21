/* settings */
// all items with this class will have animation
const animClass = '_anim-item'; // default: '_anim-item'

// all items with this class will have only one animation
const noHideClass = '_anim-no-hide'; // defaul: '_anim-no-hide'

// animation trigger class
const activeClass = '_anim-active'; // default: '_anim-active'

// coefficient (you need scroll 1/animStartCoefficient parts for animation)
const animStartCoefficient = 4; // defaul: 4 (1/4 part)

// delay in starting the checking function when opening the page
const firstCheckDelay = 300; // ms, default: 300

// if true, the program will run
const enableAnim = true;


/* program */
const animItems = document.querySelectorAll('.' + animClass);

// if there are elements
if ( animItems.length > 0 && enableAnim ) {
    window.addEventListener('scroll', checkAnim);
    setTimeout(checkAnim, firstCheckDelay);
}

function checkAnim() {
    for ( let index = 0; index < animItems.length; index++ ) {
        const animItem = animItems[index];
        const onScreen = itemOnScreen(animItem, animStartCoefficient);
        if ( onScreen )
            animItem.classList.add(activeClass);
        else if ( !animItem.classList.contains(noHideClass) )
            animItem.classList.remove(activeClass);
    }
}
function unactiveAllAnim() {
    const activeElements = document.querySelectorAll('.' + activeClass);

    for ( index = 0; index < activeElements.length; index++ ) {
        const element = activeElements[index];
        element.classList.remove(activeClass);
    } 
}
function activeAllAnim() {
    for ( let index = 0; index < animItems.length; index++ )
        animItems[index].classList.add(activeClass);
}