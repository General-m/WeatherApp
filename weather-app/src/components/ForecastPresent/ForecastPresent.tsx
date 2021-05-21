import React, { useState } from 'react';
import Context from "../Context";
import ForecastHeader from '../ForecastHeader/ForecastHeader';
import SelectCity from '../SelectCity/SelectCity';
import classes from './Forecast.module.css';
import ForecastNextCard from '../ForecastNextCard/ForecastNextCard';


const ForecastPresent: React.FC = () => {

  const [context, setContext] = useState<string>();
  const value = {
    context,
    setContext
  }

  return (
    <Context.Provider value={value}>
      <article className={classes.forecast}>
        <section className={classes.forecast__header}>
          <ForecastHeader title='7 Days Forecast' />
          <div className={classes.select}>
            <SelectCity />
          </div>
        </section>
        <ForecastNextCard />
      </article>

    </Context.Provider>
  )
}

export default ForecastPresent;
