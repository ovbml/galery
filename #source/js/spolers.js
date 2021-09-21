/* settings */
const spolerClasses = {
    block: 'spolers', // default: "spolers"
    spoler: 'spolers__spoler', // default: "spolers__spoler"
    label: 'spolers__label', // default: "spolers_label"
    items: 'spolers__items', // default: "spolers_items"
    item: 'spolers__item', // default: "spolers__item"

    active: '_active-spoler', // default: "_active-spoler"
    shown: '_shown-spoler', // default: "_shown-spoler"
    oneSpoler: '_one-spoler', // default: "_one-spoler",
};
const spolerDatasetNames = {
    animDuration: 'animDuration', // default: "animDuration"

    enableDelay: 'enableDelay', // default: "enableDelay"
    startDelay: 'startDelay', // default: "startDelay"
    delayStep: 'delayStep', // default: "delay"
};
const defaultSpolerDatesetValues = {
    // it must be the same as in CSS
    animDuration: 300, // ms, default: 300

    // if true, add transition-delay to the elements like as below
    enableDelay: false, // defaul: false

    // start transiton delay value
    startDelay: 0, // ms, default: 0

    // transition-delay of next item == this value + transition-delay of this item
    delayStep: 300, // ms, defaly: 300
}

const spolerBlocks = document.querySelectorAll('.' + spolerClasses.block);

// block processing
for ( let bi = 0; bi < spolerBlocks.length; bi++ ) { // bi -- block index
    function getValue(propName) {
        const value = block.dataset[spolerDatasetNames[propName]];
        const defaultValue = defaultSpolerDatesetValues[propName];
        return eval(value || defaultValue);
    }

    // vars
    const block = spolerBlocks[bi];
    const spolers = block.querySelectorAll('.' + spolerClasses.spoler);
    const animDuration = getValue('animDuration');
    const enableDelay = getValue('enableDelay');
    const startDelay = getValue('startDelay');
    const delayStep = getValue('delayStep');

    // block's spolers processing
    for ( let si = 0; si < spolers.length; si++ ) { // si -- spoler index
        // functions
        function slideUp(element) {
            const spoler = element.parentNode;

            // hide
            element.style.height = element.scrollHeight - 2 + 'px';
            setTimeout(function() {
                element.style.height = '0px';
            }, 0);

            // unactive spoler
            spoler.classList.remove(spolerClasses.active);

            setTimeout(function() {
                // unshown spoler
                spoler.classList.remove(spolerClasses.shown);
            }, animDuration);
        }
        function slideDown(element) {
            const spoler = element.parentNode;

            // show
            element.style.height = element.scrollHeight - 2 + 'px';

            // active spoler
            spoler.classList.add(spolerClasses.active);
            setTimeout(function() {
                // shown spoler
                spoler.classList.add(spolerClasses.shown);

                // for safety resizing
                element.style.height = 'auto';
            }, animDuration);
        }

        // vars
        const spoler = spolers[si];
        const label = spoler.querySelector('.' + spolerClasses.label);
        const items = spoler.querySelector('.' + spolerClasses.items);
        const itemsNodes = items.querySelectorAll('.' + spolerClasses.item);
        let transitonDelay = startDelay;

        // delay init
        if ( enableDelay )
            for ( let ii = 0; ii < itemsNodes.length; ii++ ) { // ii -- item index
                const item = itemsNodes[ii];
                item.style.transitionDelay = transitonDelay + 'ms';
                transitonDelay += delayStep;
            }

        // init click handler
        label.onclick = function() {
            // close other spolers if one-spoler setting
            if ( block.classList.contains(spolerClasses.oneSpoler) ) {
                const activeSpolers = block.querySelectorAll('.' + spolerClasses.shown);
                for ( let ss = 0; ss < activeSpolers.length; ss++) { // ss -- shown spolers
                    const activeSpoler = activeSpolers[ss];
                    const activeItems = activeSpoler.querySelector('.' + spolerClasses.items);

                    // if not this spoler
                    if ( activeSpoler !== spoler )
                        // hide
                        slideUp(activeItems);
                }
            }

            // if shown
            if ( spoler.classList.contains(spolerClasses.shown) )
                // hide spoler
                slideUp(items);
            // if disactive
            else
                // show spoler
                slideDown(items);
        };

        // hide when page is ready
        if ( !spoler.classList.contains(spolerClasses.shown) )
            slideUp(items);
    }
}