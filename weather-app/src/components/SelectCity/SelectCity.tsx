import React from 'react';
import classes from './SelectCity.module.css'

const SelectCity: React.FC = () => {

  // const options = texts.map((text, index) => {
  // 	return <option key={index}>{text}</option>;
  // });
  return (
    <div className={classes.label__wrapper}>
      <form >
        <input
          placeholder='Select city'
          list="lst"
        />
        <datalist id="lst">
          <option >Krasnodar</option>
          <option >Samara</option>
          <option >Saratov</option>
        </datalist>


      </form>
    </div >
  )
}

export default SelectCity;
