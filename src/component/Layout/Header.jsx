import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export default function Header({onOpenCart}) {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onOpenCart={onOpenCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Meals' />
      </div>
    </>
  );
}
