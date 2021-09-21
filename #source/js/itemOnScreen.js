// get scrolled pixels from the top and the left of a page
function getTopOffsetOf(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function itemOnScreen(item, startCoefficient = 4) {
    const itemHeight = item.offsetHeight;

    // element's position from the top of a page
    const itemOffset = getTopOffsetOf(item);

    // min show point from the top of a page
    let startItemPoint = window.innerHeight - itemHeight / startCoefficient;
    if ( itemHeight > window.innerHeight )
        startItemPoint = window.innerHeight - window.innerHeight / startCoefficient;

    if (
        // if start point is scrolled
        ((window.pageYOffset || document.documentElement.scrollTop) > (itemOffset - startItemPoint)) &&
        // and end point is not scrolled
        ((window.pageYOffset || document.documentElement.scrollTop) < (itemOffset + itemHeight))
    )
        return true;
    else
        return false;
}