import React, { useContext, useEffect, useState } from 'react';
import classes from './Cards.module.css'
import Card from '../Card/Card';
import { cities } from '../../consts/cities'
import { fetchWeather } from '../../services/fetch-weather';
import Context from '../Context';
import ForecastEmpty from '../ForecastEmpty/ForecastEmpty';

const Cards: React.FC = () => {
  const value = useContext(Context);
  const selectCity = value.context;
  const [isforecastGet, setIsForecastGet] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDate, setWeatherDate] = useState(new Date());
  const forecastWeek = {
    date: temperature,
    icon: weatherIcon,
    temp: temperature

  }

  useEffect(() => {
    if (selectCity && cities[selectCity]) {
      fetchWeather(cities[selectCity].lat, cities[selectCity].lon).then((data) => {
        console.log(data);
        setWeatherIcon(
          `https://openweathermap.org/img/w/${data.daily[0].weather.icon}.png`,
        );
        setTemperature(Math.round(data.daily[0].temp.day));
        setWeatherDate(new Date(data.daily.dt * 1000 - (data.timezone_offset * 1000)));
        setIsForecastGet(true);
      });
    }
  }, [selectCity]);

  return isforecastGet ? (
    <section className={classes.container}>
      <div className={classes.leftArrow}></div>
      <Card myValue={temperature} />

      <div className={classes.rightArrow}></div>
    </section>
  ) :
    (
      <ForecastEmpty />
    )

}

export default Cards;
