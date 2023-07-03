import React from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import useCart from '../../../hooks/useCart';

export default function MealItem({ id, price, description, name }) {
  const { addItem } = useCart();

  const addItemToCartHandler = (amount) => {
    addItem({ id, price, name, amount });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
}
