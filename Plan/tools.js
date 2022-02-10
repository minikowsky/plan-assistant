function getDayIndex(day){
    switch(day){
        case "Poniedziałek":
            return 0;
            break;
        case "Wtorek":
            return 1;
            break;
        case "Środa":
            return 2;
            break;
        case "Czwartek":
            return 3;
            break;
        case "Piątek":
            return 4;
            break;
        case "Sobota":
            return 5;
            break;
        case "Niedziela":
            return 6;
            break;
        default:
            return 0;
    }
}

function getTimeIndex(time){
    let splitTime = time.toString().split(':');
    let hours = parseInt(splitTime[0]) - 6;
    let minutes = parseInt(splitTime[1]) / 15;
    return hours * 4 + minutes;

}


const hexToRGB = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
     ,(m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g)
     .map(x => parseInt(x, 16))