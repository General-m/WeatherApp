import React from 'react';
import classes from './WeatherCard.module.css';
import { MONTHS_NAME } from '../../consts/monthsName';

type Props = {
  forecast: Weather,
  style?: object
}

type Weather = {
  date: number,
  icon: string,
  temp: number
}

const Card: React.FC<Props> = ({ forecast, style }) => {

  const getDate = () => {
    return (
      new Date(forecast.date).getDate()
      + ' ' + MONTHS_NAME[new Date(forecast.date).getMonth()] + ' ' + new Date(forecast.date).getFullYear()
    )
  }

  return (

    <div className={classes.card} style={style}>
      <div className={classes.card__date}>
        {getDate()}
      </div>
      <div className={classes.card__image}>
        <img width='80px' height='80px' src={forecast.icon} alt='weather icon'></img>
      </div>
      <div className={classes.card__temperature}>
        {forecast.temp > 0 ? '+' + forecast.temp : "-" + forecast.temp}°
        </div>
    </div>

  )
}
export default Card;
