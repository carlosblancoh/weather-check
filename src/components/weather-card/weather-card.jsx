import PropTypes from 'prop-types';
import './weather-card.css';

export function WeatherCard({cityName, temperature, humidity, wind}) {
    return (
        <div className='weatherCard'>
            <div className='weatherCardCity'>
                {cityName}
            </div>
            <div className='weatherCardTemperature weatherCardData'>
                <div className='weatherCardValue'>
                    <div className='weatherCardNumber'>
                        {Math.round(temperature)}
                    </div>
                    <div className='weatherCardUnits'>
                        ºC
                    </div>
                </div>
                <div className='weatherCardLabel'>
                    Temperatura
                </div>
            </div>
            <div className='weatherCardHumidityAndWind'>
                <div className='weatherCardData'>
                    <div className='weatherCardValue'>
                        <div className='weatherCardNumber'>
                            {humidity}
                        </div>
                        <div className='weatherCardUnits'>
                            %
                        </div>
                    </div>
                    <div className='weatherCardLabel'>
                        Humedad
                    </div>
                </div>
                <div className='weatherCardData'>
                    <div className='weatherCardValue'>
                        <div className='weatherCardNumber'>
                            {Math.round(wind)}
                        </div>
                        <div className='weatherCardUnits'>
                            km/h
                        </div>
                    </div>
                    <div className='weatherCardLabel'>
                        Viento
                    </div>
                </div>
            </div>
        </div> 
    );
}

WeatherCard.propTypes = {
    cityName : PropTypes.string,
    temperature : PropTypes.number,
    humidity : PropTypes.number,
    wind : PropTypes.number,
};