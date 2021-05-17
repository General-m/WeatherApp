import React from 'react';
import classes from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        Weather
        <span className={classes.title__span}>
          forecast
        </span>
      </h1>

    </header>
  )
}

export default Header;
