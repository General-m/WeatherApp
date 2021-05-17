import React from 'react';
import ForecastEmpty from '../ForecastEmpty/ForecastEmpty';
import SelectCity from '../SelectCity/SelectCity';
import classes from './Forecast.module.css';

const ForecastPresent: React.FC = () => {
  return (
    <article className={classes.forecast}>
      <h2 className={classes.forecast__title}>
        7 Days Forecast</h2>
      <section className={classes.select}>
        <SelectCity />
      </section>
      <ForecastEmpty />
    </article>
  )
}

export default ForecastPresent;
