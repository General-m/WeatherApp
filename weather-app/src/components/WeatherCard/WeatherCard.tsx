import classes from './WeatherCard.module.css';
import React, { useEffect, useState } from 'react';


type Props = {
  forecast: Weather
}

type Weather = {
  date: number,
  icon: string,
  temp: number
}

const Card: React.FC<Props> = ({ forecast }) => {

  return (
    <div className={classes.card}>
      <div>{new Date(forecast.date).getFullYear() + ' ' + new Date(forecast.date).getDate()
        + ' ' + new Date(forecast.date).getMonth()}</div>
      <div className={classes.card__image}>
        <img width='60px' height='60px' src={forecast.icon} alt='cloud'></img>
      </div>

      <div>{forecast.temp}°</div>

    </div>
  )
}
export default Card;
