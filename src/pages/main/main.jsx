import { useState } from 'react';
import { WeatherService } from "../../services/weather";
import { History } from "../../components/history/history";
import { Logo } from "../../components/logo/logo";
import { SearchBar } from "../../components/search-bar/search-bar";
import { WeatherCard } from "../../components/weather-card/weather-card";
import { HistoryService } from '../../services/history';
import './main.css';

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
            if (weather) {
                const updatedPreviousSearches = historyService.add(cityName);
                setPreviousSearches(updatedPreviousSearches);
            }
        } catch(error) {
            console.error(error);
            setError(true);
            setResults(undefined);
        } finally {
            setIsLoading(false);
            setLoaded(true);
        }
    };

    return (
        <div className='container'>
            <Logo
                onClearPage={() => window.location.reload()}
                logoBigSize={!loaded}
            />
            {!loaded && (
                <div className='message'>
                    ¡Bienvenido!<br/><br/>
                    Weather Check te permite conocer el tiempo que hace en tu ciudad.<br/>
                    ¡O en la que tú quieras!
                </div>
            )}
            <SearchBar 
                loading={isLoading}
                onSearch={onSearch}
                firstSearch={!loaded}
            />
            {loaded && !error && !results && (
                <div className='message'>
                    <img 
                        src='/sadFace.png'
                        className='errorImage'
                        alt='error'
                    />
                    <div>
                        ¡Lo sentimos! No hemos encontrado la localización indicada. ¡Prueba a realizar otra búsqueda!
                    </div>
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
                <div className='message'>
                    <img 
                        src='/sadFace.png'
                        className='errorImage'
                        alt='error'
                    />
                    <div>
                        Se ha producido un error al realizar la búsqueda.
                    </div>
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