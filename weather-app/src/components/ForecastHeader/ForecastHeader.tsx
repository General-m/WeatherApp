import React from 'react';
import classes from './ForecastHeader.module.css';
import SelectCity from '../SelectCity/SelectCity';

type Props = {
  title: string
}

const ForecastHeader: React.FC<Props> = ({ title }) => {
  return (
    <h2 className={classes.forecast__title}>
      {title}</h2>

  )
}

export default ForecastHeader;
