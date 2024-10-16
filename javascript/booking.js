import { getWeatherForecast } from "./service.js";
import { getDaysBetweenDates } from "./helper.js";
import { addWeatherToWidget, setWeatherOutOfBounds, setWeatherErrorToWidget } from "./bookingElements.js";

/* Konstaner för koordinaterna till 3BQ */
const latitude3bq = "60.7303";
const longitude3bq = "14.9999";

/* Håll reda på elementen vi använder */
const datePicker = document.querySelector("#date");
const weatherWidget = document.querySelector("#weatherWidget");

//Förvalt datum ska vara dagens datum i datepickern, vi disablear även datum bakåt i tiden :)
const dateToday = new Date().toISOString().split('T')[0]; //Ger dagens datum i format yyyy-MM-dd
datePicker.value = dateToday;
datePicker.setAttribute("min", dateToday);

/* Lägg till eventListener på input date */
datePicker.addEventListener("change", function() {
    getAndSetWeather(datePicker.value);
});

/* Vi kallar funktionen direkt */
getAndSetWeather(dateToday);

/* Validerar inputs i metoden & hämtar vädret m.h.a. service-filen */
async function getAndSetWeather(date) {
    let daysBetweenDays = getDaysBetweenDates(new Date(date), new Date(dateToday));

    if(daysBetweenDays > 14) {
        setWeatherOutOfBounds(weatherWidget);
        return;
    }

    try {
        let result = await getWeatherForecast(latitude3bq, longitude3bq, date);
        addWeatherToWidget(weatherWidget, result, date);
    } catch(error) {
        setWeatherErrorToWidget(weatherWidget, error.message);
    }
}