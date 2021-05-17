import React from 'react';
import ForecastEmpty from '../ForecastEmpty/ForecastEmpty';
import SelectCity from '../SelectCity/SelectCity';
import SelectDate from '../SelectDate/SelectDate';
import classes from './ForecastPast.module.css';


const ForecastPast: React.FC = () => {
  return (
    <article className={classes.forecast}>
      <h2 className={classes.forecast__title}>
        Forecast for a Date in the Past</h2>
      <section className={classes.select}>
        <SelectCity />
        <SelectDate />
      </section>
      <ForecastEmpty />
    </article>
  )
}

export default ForecastPast;
