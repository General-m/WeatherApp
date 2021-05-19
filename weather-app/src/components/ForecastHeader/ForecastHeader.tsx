import React from 'react';
import classes from './ForecastHeader.module.css';
import SelectCity from '../SelectCity/SelectCity'

export default function ForecastHeader() {
  return (
    <section className={classes.forecast__header}>
      <h2 className={classes.forecast__title}>
        7 Days Forecast</h2>
      <div className={classes.select}>
        <SelectCity />
      </div>
    </section>
  )
}
