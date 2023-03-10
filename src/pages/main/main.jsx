import { useState } from 'react';
import { WeatherService } from "../../services/weather";
import { History } from "../../components/history/history";
import { Logo } from "../../components/logo/logo";
import { SearchBar } from "../../components/search-bar/search-bar";
import { WeatherCard } from "../../components/weather-card/weather-card";

export function MainPage(props) {
    const weatherService = new WeatherService();
    const [results, setResults] = useState(undefined);
    const [previousSearches, setPreviousSearches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const onSearch = async cityName => {
        setIsLoading(true);
        try {
            const weather = await weatherService.getWeatherByCityName(cityName);
            setResults(weather);
            setError(false);
        } catch {
            setError(true);
            setResults(undefined);
        } finally {
            setPreviousSearches(oldValue => [cityName, ...oldValue].slice(0, 5));
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Logo/>
            <SearchBar 
                loading={isLoading}
                onSearch={onSearch}
            />
            {results && (
                <WeatherCard
                    cityName={results.cityName}
                    temperature={results.temperature}
                    humidity={results.humidity}
                    wind={results.wind}
                />
            )}
            {error && (
                <div>
                    Se ha producido un error al realizar la búsqueda.
                </div>
            )}
            {previousSearches.length > 0 && (
                <History
                    items={previousSearches}
                />
            )}
        </div> 
    );
}

MainPage.propTypes = {};