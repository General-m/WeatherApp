import classes from './Card.module.css';
import React, { useEffect, useState } from 'react';


const Card: React.FC = (props: any) => {
  // console.log(props)
  // const [isforecastGet, setIsForecastGet] = useState(false);
  // const [temperature, setTemperature] = useState(0);
  // const [weatherIcon, setWeatherIcon] = useState('');
  // const [weatherDate, setWeatherDate] = useState(new Date());


  return (
    <div className={classes.card}>
      <div>17 ctynz 2021</div>
      <div>cloud</div>
      <div>21</div>
      {/* <div>{temperature}°</div>
      <img width='30px' height='30px' src={weatherIcon} alt="cloud" />
      <div>
        {weatherDate.getDay()}
        {weatherDate.getMonth()}
        {weatherDate.getFullYear()}
      </div> */}
    </div>
  )
}
export default Card;
