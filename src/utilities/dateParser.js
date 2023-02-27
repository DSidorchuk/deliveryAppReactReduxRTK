

export const dateParser = (date) => {
    let str = date.split(' ', 5);
    return `${weekDay(str[0])} ${str[2]}.${month(str[1])}.${str[3]} ${str[4]}`;
}

function weekDay(str) {
    switch(str){
        case 'Mon':
            return 'Понеділок';
        case 'Tue':
            return 'Вівторок';
        case 'Wen':
            return 'Середа';
        case 'Thu':
            return 'Четвер';
        case 'Fri':
            return 'Пятниця';
        case 'Sat':
            return 'Субота';
        case 'Sun':
            return 'Неділя';
        default: return str;
    }
}

function month(str) {
    switch(str) {
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        case 'Dec':
            return '12';
        default: return str;
    }
}

// "Thu Feb 23 2023 20:46:31 GMT+0200 (Восточная Европа, стандартное время)"