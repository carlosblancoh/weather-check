import { History } from "../../components/history/history";
import { Logo } from "../../components/logo/logo";
import { SearchBar } from "../../components/search-bar/search-bar";
import { WeatherCard } from "../../components/weather-card/weather-card";

export function MainPage(props) {
    return (
        <div>
            <Logo/>
            <SearchBar/>
            <History/>
            <WeatherCard/>
        </div> 
    );
}

MainPage.propTypes = {};