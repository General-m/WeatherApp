import React, { useEffect, useState } from 'react';
import Context from "../Context";
import Cards from '../Cards/Cards';
import ForecastHeader from '../ForecastHeader/ForecastHeader';
import SelectCity from '../SelectCity/SelectCity';
import classes from './Forecast.module.css';



const ForecastPresent: React.FC = () => {

  const myCallback = (selectCity: string) => {
    console.log(selectCity);
  }
  const [context, setContext] = useState();
  // return (
  //   <Context.Provider value={[context, setContext]}>
  //     <ComponentA />
  //     <ComponentB />
  //   </Context.Provider>

  const value = {
    context,
    setContext
  }

  return (
    <Context.Provider value={value}>
      <article className={classes.forecast}>
        <ForecastHeader />
        <Cards />
      </article>

    </Context.Provider>

  )
}

export default ForecastPresent;
