/* Returnerar antalet dagar mellan två datum */
export function getDaysBetweenDates(date1, date2) {
    return Math.abs((date1 - date2)/(1000*60*60*24)); //Skillnaden blir i ms, så vi dividerar med 1000 (ms) * 60 (s) * 60 (m) * 24(h)
}