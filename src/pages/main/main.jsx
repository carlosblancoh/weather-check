import { useState } from 'react';
import { WeatherService } from "../../services/weather";
import { History } from "../../components/history/history";
import { Logo } from "../../components/logo/logo";
import { SearchBar } from "../../components/search-bar/search-bar";
import { WeatherCard } from "../../components/weather-card/weather-card";
import { HistoryService } from '../../services/history';

export function MainPage(props) {
    const weatherService = new WeatherService();
    const historyService = new HistoryService();
    const [results, setResults] = useState(undefined);
    const [previousSearches, setPreviousSearches] = useState(historyService.load());
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const onSearch = async cityName => {
        setIsLoading(true);
        try {
            const weather = await weatherService.getWeatherByCityName(cityName);
            setResults(weather);
            setError(false);
        } catch(error) {
            console.error(error);
            setError(true);
            setResults(undefined);
        } finally {
            const updatedPreviousSearches = historyService.add(cityName);
            setPreviousSearches(updatedPreviousSearches);
            setIsLoading(false);
            setLoaded(true);
        }
    };

    return (
        <div>
            <Logo/>
            <SearchBar 
                loading={isLoading}
                onSearch={onSearch}
            />
            {loaded && !error && !results && (
                <div>
                    ¡Lo sentimos! No hemos encontrado la localización indicada. ¡Prueba a realizar otra búsqueda!
                </div>
            )}
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
                    onSearch={onSearch}
                />
            )}
        </div> 
    );
}

MainPage.propTypes = {};