import { useState } from 'react';
import { WeatherService } from "../../services/weather";
import { History } from "../../components/history/history";
import { Logo } from "../../components/logo/logo";
import { SearchBar } from "../../components/search-bar/search-bar";
import { WeatherCard } from "../../components/weather-card/weather-card";

export function MainPage(props) {
    const weatherService = new WeatherService();
    const [results, setResults] = useState(undefined);

    const onSearch = async cityName => {
        const weather = await weatherService.getWeatherByCityName(cityName);
        setResults(weather);
    };

    return (
        <div>
            <Logo/>
            <SearchBar
                onSearch={onSearch}
            />
            <History/>
            {results && (
                <WeatherCard
                    cityName={results.cityName}
                    temperature={results.temperature}
                    humidity={results.humidity}
                    wind={results.wind}
                />
            )}
        </div> 
    );
}

MainPage.propTypes = {};