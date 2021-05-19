import classes from './Card.module.css';
import React, { useEffect, useState } from 'react';


interface SelectCityState {
  myValue: number,
}
const Card: React.FC<SelectCityState> = (props: SelectCityState) => {

  return (
    <div className={classes.card}>
      <div>17 ctynz 2021</div>
      <div>cloud</div>
      <div>{props.myValue}</div>
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
