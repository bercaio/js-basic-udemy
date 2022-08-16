const dateNow = new Date('2022-04-24 00:00:00')
const getDaliy = dateNow.getDay()
const textDayDaily = daily(getDaliy)

function daily(getDaily) {
    let textDaily
    switch (getDaily) {
        case 0: textDaily = 'Domingo'
            return textDaily;
        case 1: textDaily = 'Sengunda'
            return textDaily;
        case 2: textDaily = 'Terça'
            return textDaily;
        case 3: textDaily = 'Quarta'
            return textDaily;
        case 4: textDaily = 'Quinta'
            return textDaily;
        case 5: textDaily = 'Sexta'
            return textDaily;
        case 6: textDaily = 'Sabado'
            return textDaily;
        default: ' number false'
            break;
    }

}

console.log(getDaliy, textDayDaily)
