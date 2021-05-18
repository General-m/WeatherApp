import React, { useEffect, useState } from 'react';
import classes from './Cards.module.css'
import Card from '../Card/Card';
import { cities } from '../../consts/cities'
import { fetchWeather } from '../../services/fetch-weather';

const Cards: React.FC = () => {
  const [isforecastGet, setIsForecastGet] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDate, setWeatherDate] = useState(new Date());
  const forecastWeek = [
    {
      date: temperature,
      icon: weatherIcon,
      temp: temperature
    }
  ]

  useEffect(() => {
    fetchWeather().then((data) => {
      console.log(data);
      setWeatherIcon(
        `https://openweathermap.org/img/w/${data.daily[0].weather.icon}.png`,
      );
      setTemperature(Math.round(data.daily[0].temp.day));
      setWeatherDate(new Date(data.daily.dt * 1000 - (data.timezone_offset * 1000)));
      setIsForecastGet(true);
    });

  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.leftArrow}></div>
      <Card />
      <Card />
      <Card />
      <div className={classes.rightArrow}></div>


      {/* {isforecastGet ? (
           <Card />

      ) :
        (<ForecastEmpty />)

      } */}


    </section>
  )
}
export default Cards;
