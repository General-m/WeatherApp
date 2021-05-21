import React, { useContext, useEffect, useState } from 'react';
import classes from './ForecastNextCard.module.css'
import { CITIES } from '../../consts/cities'
import { fetchWeather } from '../../services/fetch-weather';
import Context from '../Context';
import ForecastEmpty from '../ForecastEmpty/ForecastEmpty';
import WeatherCard from '../WeatherCard/WeatherCard';

type DataList = {
  date: number,
  icon: string,
  temp: number

}

const ForecastNextCard: React.FC = () => {
  const value = useContext(Context);
  const selectCity = value.context;
  const [isforecastGet, setIsForecastGet] = useState(false);
  const [forecastList, setForecastList] = useState<Array<DataList>>([])

  useEffect(() => {
    if (selectCity && CITIES[selectCity]) {
      console.log(selectCity);
      fetchWeather(CITIES[selectCity].lat, CITIES[selectCity].lon).then((data) => {

        Object.keys(data.daily).map((key: string, index: number) => {
          if (index < 7) {
            let info: DataList = {
              date: 0,
              icon: '',
              temp: 0
            };
            info.date = data.daily[key].dt * 1000 - (data.timezone_offset * 1000);
            info.icon = (`https://openweathermap.org/img/w/${data.daily[key].weather[0].icon}.png`)
            info.temp = (Math.round(data.daily[key].temp.day));
            setForecastList(forecastList => [...forecastList, info]);
          }
          return null;
        })
        setIsForecastGet(true);
      });
    }
    setIsForecastGet(false);
  }, [selectCity]);

  return isforecastGet ? (
    <section className={classes.container}>
      <div className={classes.leftArrow}></div>
      {
        forecastList.map((item, index) => (
          <WeatherCard key={index} forecast={item} />
        ))
      }
      <div className={classes.rightArrow}></div>
    </section>
  ) :
    (
      <ForecastEmpty />
    )

}

export default ForecastNextCard;
