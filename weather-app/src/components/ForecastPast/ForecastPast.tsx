import React, { useState } from 'react';
import Context from "../Context";
import ContextDate from '../ContextDate';
import ForecastHeader from '../ForecastHeader/ForecastHeader';
import SelectCity from '../SelectCity/SelectCity';
import SelectDate from '../SelectDate/SelectDate';
import classes from './ForecastPast.module.css';
import ForecastPastCard from '../ForecastPastCard/ForecastPastCard';


const ForecastPast: React.FC = () => {
  const [context, setContext] = useState<string>();
  const [contextT, setContextT] = useState<number>();
  const value = {
    context,
    setContext
  }

  const time = {
    contextT,
    setContextT
  }
  return (
    <Context.Provider value={value}>
      <ContextDate.Provider value={time}>
        <article className={classes.forecast}>
          <section className={classes.forecast__header}>
            <ForecastHeader title='Forecast for a Date in the Past' />
            <div className={classes.select}>
              <SelectCity />
              <SelectDate />
            </div>
          </section>
          <ForecastPastCard />
        </article>
      </ContextDate.Provider>

    </Context.Provider >

  )
}

export default ForecastPast;
