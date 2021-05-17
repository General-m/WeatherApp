import React from 'react';
import classes from './ForecastEmpty.module.css'

const ForecastEmpty: React.FC = () => {

  return (
    <section className={classes.content} >
      <div className={classes.content__image} >
      </div>
      <div className={classes.content__message} >
        Fill in all the fields and the weather will be displayed
        </div>
    </section>
  )
}

export default ForecastEmpty;
