const version = '0.9.5';
const author = '@ovbml';
const lastEditDate = new Date(Date.UTC(2021, 9, 19, 0, 44));
const sourceTimezone = 'MSK';
const changeList = {
    '0.9.3': [
        'Изменен footer сайта: добавлены иконки к надписям и все разбито по блокам',
    ],
    '0.9.4': [
        'Орфографические исправления',
        'Добавлен change list',
        'Добавил извинения за формулировки фраз для филологов',
    ],
    '0.9.5': [
        'Добавлено предупреждение на случай, если картинки не показываются'
    ],
};

function getChangesList() {
    // vars init
    const versions = Object.getOwnPropertyNames(changeList);
    const tab = '    ';

    // -- //
    let output = 'Список изменений:\n';

    // versions processing
    for ( let index = 0; index < versions.length; index++ ) {
        // vars init
        const version = versions[index];
        const changes = changeList[version];

        // output update
        output += tab + '• ' + version + '\n';

        // changes processing
        for ( let index = 0; index < changes.length; index++ )
            output += tab + tab + '○ ' + changes[index] + ';\n';

        // separating line
        output += '\n';
    }

    // return trimmed line (cause it can contains separating line in the end)
    return output.trim();
}
function logChangesList() {
    console.log(getChangesList());
}