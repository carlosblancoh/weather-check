class WeatherService {

    getWeatherByCityName(cityName) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    cityName : cityName,
                    temperature : 14,
                    humidity : 65,
                    wind : 37,
                });
            }, 5000);
        });
    }
    
}