import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import SelectCity from '../SelectCity/SelectCity';
import classes from './Forecast.module.css';



const ForecastPresent: React.FC = () => {

  return (
    <article className={classes.forecast}>
      <section className={classes.forecast__header}>
        <h2 className={classes.forecast__title}>
          7 Days Forecast</h2>
        <div className={classes.select}>
          <SelectCity />
        </div>
      </section>
      <Cards />
      {/* <section className={classes.forecast__content}>

        <Cards />


      </section> */}



    </article>
  )
}

export default ForecastPresent;
