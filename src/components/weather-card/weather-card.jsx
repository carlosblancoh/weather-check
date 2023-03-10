import PropTypes from 'prop-types';

export function WeatherCard({cityName, temperature, humidity, wind}) {
    return (
        <div>
            <ul>
                <li>cityName: {cityName}</li>
                <li>temperature: {temperature}</li>
                <li>humidity: {humidity}</li>
                <li>wind: {wind}</li>
            </ul>
        </div> 
    );
}

WeatherCard.propTypes = {
    cityName : PropTypes.string,
    temperature : PropTypes.number,
    humidity : PropTypes.number,
    wind : PropTypes.number,
};