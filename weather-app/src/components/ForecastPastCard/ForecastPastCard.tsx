import React, { useContext, useEffect, useState } from 'react';
import classes from './ForecastPastCard.module.css'
import WeatherCard from '../WeatherCard/WeatherCard';
import { CITIES } from '../../consts/cities'
import Context from '../Context';
import ContextDate from '../ContextDate';
import ForecastEmpty from '../ForecastEmpty/ForecastEmpty';
import { fetchWeatherHistorical } from '../../services/fetch-weather-historical';

const ForecastPastCard: React.FC = () => {
  const value = useContext(Context);
  const time = useContext(ContextDate);
  const selectCity = value.context;
  const selectTime = time.contextT;
  const [isforecastGet, setIsForecastGet] = useState(false);
  const [temperature, setTemperature] = useState<number>(0);
  const [weatherIcon, setWeatherIcon] = useState<string>('');
  const [weatherDate, setWeatherDate] = useState<number>(0);

  useEffect(() => {
    if (selectCity && CITIES[selectCity] && selectTime) {
      fetchWeatherHistorical(CITIES[selectCity].lat, CITIES[selectCity].lon, selectTime).then((data) => {
        console.log(data);
        setTemperature(Math.round(data.current.temp));
        setWeatherIcon(`https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`);
        setWeatherDate(data.current.dt * 1000 - (data.timezone_offset * 1000));
        setIsForecastGet(true);
      });
    }
    setIsForecastGet(false);
  }, [selectCity, selectTime]);


  return isforecastGet ? (
    <section className={classes.container}>
      {
        <WeatherCard style={{ width: " 54.4rem" }} forecast={
          {
            date: weatherDate,
            icon: weatherIcon,
            temp: temperature
          }} />
      }
    </section>
  ) :
    (
      <ForecastEmpty />
    )
}

export default ForecastPastCard;
