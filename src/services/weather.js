const API_KEY = 'e33c584f229442014f1d6670627ccea7';

export class WeatherService {

    async getWeatherByCityName(cityName) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
            + cityName 
            + '&units=metric&appid=' 
            + API_KEY;
        
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            return {
                cityName : data.name,
                temperature : data.main.temp,
                humidity : data.main.humidity,
                wind : data.wind.speed,
            };
        } else {
            return undefined;
        }
    }
    
}