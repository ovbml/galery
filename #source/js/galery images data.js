const galeryData = {
    // output & input
    oneImgBlock: {
        self: document.querySelector('.one-image-galery'),
        title: document.querySelector('.one-image-galery__information-title'),
        img_container: document.querySelector('.one-image-galery__image'),
        img: document.querySelector('.one-image-galery__image img'),
        a: document.querySelector('.one-image-galery__image a'),
        photoCount: document.querySelector('.one-image-galery__photo-count'),
        photoNumber: document.querySelector('.one-image-galery__photo-number'),
    },

    // settings
    folderPath: 'img/galery images/',
    loop: true, // loop img and page changing from both sides

    currentImgIndex: 1, // start img index
    imagesCount: 53,

    initScale: 1.5,
    scale: 1.5,
    maxScale: 2,
    minScale: .5,

    1: {
        title: 'Закат в поле',
    },
    2: {
        title: 'Закат над водой',
    },
    3: {
        title: 'Вид из окна 9го этажа',
    },
    4: {
        title: 'Горение свечи',
        oneItem: true,
    },
    5: {
        title: 'Частный сектор из 4го этажа',
    },
    6: {
        title: 'Река Днепр',
    },
    7: {
        title: 'Закат возле Днепра',
    },
    8: {
        title: 'Зима',
        oneItem: true,
    },
    9: {
        title: 'Огни в ночи',
    },
    10: {
        title: 'Ночной вид из окна дома',
    },
    11: {
        title: 'Туман',
    },
    12: {
        title: 'Ночь из окна 7го этажа',
    },
    13: {
        title: 'Цветок на окне',
    },
    14: {
        title: 'В траве у воды',
    },
    15: {
        title: 'Ночь, луна и закат',
    },
    16: {
        title: 'Закат в тумане',
    },
    17: {
        title: 'Разделение неба',
    },
    18: {
        title: 'Солнце из окна машины',
    },
    19: {
        title: 'Дерево',
        oneItem: true,
    },
    20: {
        title: 'Розовое небо',
    },
    21: {
        title: 'Дерево с розовым небом',
        oneItem: true,
    },
    22: {
        title: 'Дом  с розовым небом',
        oneItem: true,
    },
    23: {
        title: 'Закат на Днепре',
    },
    24: {
        title: 'Розовый Днепр',
    },
    25: {
        title: 'На берегу Днепра',
    },
    26: {
        title: 'Двойная радуга',
    },
    27: {
        title: 'Красный асфальт',
        oneItem: true,
    },
    28: {
        title: 'Оранжевый дом',
    },
    29: {
        title: 'Розовая даль',
    },
    30: {
        title: 'После дождя',
        oneItem: true,
    },
    31: {
        title: 'Красивые тучи',
    },
    32: {
        title: 'Радуга',
    },
    33: {
        title: 'Фиолетовая вода и трава',
    },
    34: {
        title: 'Красная вода',
    },
    35: {
        title: 'Гриб и листья в траве',
    },
    36: {
        title: 'Гриб крупным планом',
        oneItem: true,
    },
    37: {
        title: 'Гриб общим планом',
        oneItem: true,
    },
    38: {
        title: 'Гриб и трава общим планом',
    },
    39: {
        title: 'Красивое небо',
    },
    40: {
        title: 'Зимний вечер',
    },
    41: {
        title: 'Отражение света на льду',
    },
    42: {
        title: 'Новогодняя гирлянда',
    },
    43: {
        title: 'Стеклопакет',
        oneItem: true,
    },
    44: {
        title: 'Трава свысока',
        oneItem: true,
    },
    45: {
        title: 'Желтые деревья',
    },
    46: {
        title: 'Трава и желтые деревья',
    },
    47: {
        title: 'В траве',
        oneItem: true,
    },
    48: {
        title: 'Красивый закат из дома',
    },
    49: {
        title: 'Красивый закат с другого ракурса',
    },
    50: {
        title: 'Яркий красивый закат',
    },
    51: {
        title: 'Закат в дали',
    },
    52: {
        title: 'Закат на озере',
    },
    53: {
        title: 'Поле',
    },
}