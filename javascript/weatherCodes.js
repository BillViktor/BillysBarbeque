/* Open Weather API använder sig av WMO's väderkoder, denna funktion översätter väderkoden till svenska */
export function getWeatherFromWmoCode(code) {
    switch(code) {
        case 0:
            return "Soligt";
        case 1:
            return "Mestadels soligt";
        case 2:
            return "Delvis molnigt";
        case 3:
            return "Molnigt";
        case 45:
        case 48:
            return "Dimma";
        case 51:
        case 53:
        case 55:
            return "Duggregn";
        case 56:
        case 57:
            return "Underkylt duggregn";
        case 61:
            return "Lätt regn";
        case 63:
            return "Regn";
        case 65:
            return "Kraftigt regn";
        case 66:
        case 67:
            return "Underkylt regn";
        case 71:
            return "Lätt snö";
        case 73:
            return "Snö";
        case 75:
            return "Kraftig snö";
        case 77:
            return "Snökorn";
        case 80:
            return "Lätta skurar";
        case 81:
            return "Skurar";
        case 82:
            return "Kraftiga skurar";
        case 85:
            return "Lätta snöskurar";
        case 86:
            return "Snöskurar";
        case 95:
        case 96:
        case 99:
            return "Åskväder";
        default:
            return "Okänt väder";
    }
}