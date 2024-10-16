import { getWeatherFromWmoCode } from "./weatherCodes.js";

let tableTemplate = `
<table>
    <thead>
        <tr>
            <th id="Tid">X</th>
            <th id="Väder">Väder</th>
            <th id="Temperatur">Temp (&deg;C)</th>
        </tr>
    </thead>
    <tbody>
        Y
    </tbody>
</table>
`;

export function addWeatherToWidget(element, weather, date) {
    /* Sätt in dagens datum i table */
    let table = tableTemplate.replace("X", date);
    let body = "";
 
    for(let i = 16; i < 24; i++) {
        body += `
        <tr>
            <td headers="Tid">${weather.time[i].split("T")[1]}</td>
            <td headers="Väder">${getWeatherFromWmoCode(weather.weather_code[i])}</td>
            <td headers="Temperatur">${weather.temperature_2m[i]} &deg;C</td>
        </tr>
        `
    }

    table = table.replace("Y", body);

    element.innerHTML = table;
}

export function setWeatherOutOfBounds(element) {
    element.innerHTML = `<p>Tyvärr kan vi bara se vädret 2 veckor framåt i tiden! :(</p>`
}

export function setWeatherErrorToWidget(element, error) {
    element.innerHTML = `<p>Nu gick något snett när vi försökte hämta vädret! Felmeddelande: ${error}</p>`;
}