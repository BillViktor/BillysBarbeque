/* Använder Open Meteo's öppna API för att hämta väder på givna koordinater & datum */
/* Max 1000 anrop/24h */
export async function getWeatherForecast(latitude, longitude, date) {
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&timezone=Europe%2FBerlin&start_date=${date}&end_date=${date}`);
    
    let data = await response.json();

    /* Får vi inte en OK statuskod så returnerar vi felet */
    if(!response.ok) {
        if(data.reason != null) {
            throw new Error(data.reason);
        }
        else {
            throw new Error(`Http-förfrågan misslyckades med statuskod: ${response.status}`)
        }
    }
    
    return data.hourly;
}