import React from 'react';
import classes from './SelectDate.module.css';

const SelectDate: React.FC = () => {

  return (
    <div className={classes.select}>
      <input type="date" />

    </div>
  )
}

export default SelectDate;
