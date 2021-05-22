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
  const [isForecastGet, setIsForecastGet] = useState(false);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(3);
  const [numberDaysForecast, setNumberDaysForecast] = useState<number>(7);
  const [forecastList, setForecastList] = useState<Array<DataList>>([])

  useEffect(() => {
    if (selectCity && CITIES[selectCity]) {
      fetchWeather(CITIES[selectCity].lat, CITIES[selectCity].lon).then((data) => {

        Object.keys(data.daily).map((key: string, index: number) => {
          if (index < numberDaysForecast) {
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

  const getNext = () => {
    if (endNumber + 1 < numberDaysForecast) {
      setStartNumber(startOrder => startOrder + 1);
      setEndNumber(startOrder => startOrder + 1);
    }
  }

  const getPrev = () => {
    if (startNumber) {
      setStartNumber(startOrder => startOrder - 1);
      setEndNumber(startOrder => startOrder - 1);
    }
  }

  return isForecastGet ? (
    <section className={classes.container}>
      <div onClick={() => getPrev()} className={`${classes.slider} ${classes.slider__prev} 
       ${!startNumber ? classes['slider-disabled'] : ''}`}></div>
      {
        forecastList.map((item, index) => {
          if (startNumber <= index && index < endNumber)
            return <WeatherCard key={index} forecast={item} />
        })
      }
      <div onClick={() => getNext()} className={`${classes.slider} ${classes.slider__next} 
     ${(endNumber + 1 === numberDaysForecast) ? classes['slider-disabled'] : ''}`}></div>
    </section >
  ) :
    (
      <ForecastEmpty />
    )
}

export default ForecastNextCard;
