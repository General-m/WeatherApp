import React, { useContext } from 'react';
import classes from './SelectCity.module.css';
import { CITIES } from '../../consts/cities';
import Context from '../Context';

const SelectCity: React.FC = () => {
  const value = useContext(Context);
  const citiesList = Object.keys(CITIES);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    value.setContext(event.target.value);
  };

  return (
    <div className={classes.label__wrapper}>
      <form >
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
          placeholder='Select city'
          list="lst"
        />
        <datalist id="lst">
          {
            citiesList.map((item, index) => (
              <option key={index} value={item} ></option>
            ))
          }
        </datalist>
      </form>
    </div >
  )
}

export default SelectCity;
