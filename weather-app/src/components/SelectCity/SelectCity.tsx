import React from 'react';
import classes from './SelectCity.module.css';
import { cities } from '../../consts/cities';

const SelectCity: React.FC = () => {

  return (
    <div className={classes.label__wrapper}>
      <form >
        <input
          placeholder='Select city'
          list="lst"
        />
        <datalist id="lst">
          {
            cities.map(item => (
              <option key={item.lat} value={item.name}></option>
            )

            )
          }
        </datalist>
      </form>
    </div >
  )
}

export default SelectCity;
