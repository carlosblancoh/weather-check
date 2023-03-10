export class WeatherService {

    getWeatherByCityName(cityName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                /*resolve({
                    cityName : cityName,
                    temperature : 14,
                    humidity : 65,
                    wind : 37,
                });*/
                reject();
            }, 1000);
        });
    }
    
}