import React, { useContext } from 'react';
import ContextDate from '../ContextDate';
import classes from './SelectDate.module.css';

const SelectDate: React.FC = () => {
  const time = useContext(ContextDate);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    time.setContextT((Date.parse(event.target.value) / 1000));
  };


  return (
    <div className={classes.select}>
      <input type="date"
        placeholder="Select date"
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)} />

    </div>
  )
}

export default SelectDate;
