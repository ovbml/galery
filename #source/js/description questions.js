const descriptionItems = document.querySelectorAll('.description__item');

/* show first item */
descriptionItems[0].childNodes[1].style.height = 'auto';
descriptionItems[0].childNodes[1].classList.add('_active-spoler');


for ( let index = 0; index < descriptionItems.length; index++ ) {
    const item = descriptionItems[index];
    const question = item.childNodes[0];
    const answers = item.childNodes[1];

    /*question.onclick = function() {
        if ( answers.classList.contains('_active') ) {
            answers.style.height = answers.scrollHeight - 2 + 'px';
            setTimeout(function() {
                answers.style.height = '0px';
            }, 0);
            setTimeout(function() {
                answers.classList.remove('_active');
            }, 300);
        } else {
            answers.style.height = answers.scrollHeight - 2 + 'px';
            setTimeout(function() {
                answers.style.height = 'auto';
            }, 300)
            answers.classList.add('_active');
        }
    };*/
}