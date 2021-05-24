import React, { useContext, useEffect, useState } from 'react';
import ContextDate from '../ContextDate';
import classes from './SelectDate.module.css';

const SelectDate: React.FC = () => {
  const time = useContext(ContextDate);
  const [viewDate, setViewDate] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    time.setContextT((Date.parse(event.target.value) / 1000));
    console.log((Date.parse(event.target.value) / 1000))
    event.preventDefault();
    setViewDate(viewDate => (Date.parse(event.target.value) / 1000));

  };

  useEffect(() => {

    console.log(viewDate)

  }, [viewDate])


  console.log(viewDate)
  return (
    <div className={classes.select}>
      <input className={classes.input__date} type="date"

        // min-max
        // placeholder="Select date"
        value={viewDate}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)} />

    </div>
  )
}

export default SelectDate;
