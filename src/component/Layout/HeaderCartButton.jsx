import React, { useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';
import useCart from '../../hooks/useCart';

export default function HeaderCartButton({ onOpenCart }) {
  const { items } = useCart();
  const [btnIsHighted, setBtnIsHighted] = useState(false);

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighted ? classes.bump : ''}`;

  useEffect(() => { 
    if (items.length === 0) {
      return;
    }
    setBtnIsHighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
