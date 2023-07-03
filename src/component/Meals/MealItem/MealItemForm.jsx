import React, { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm({ id, onAddToCart }) {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountRef.current.value;
    const enterAmountNumber = +enterAmount;

    if (enterAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 10) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enterAmountNumber);
    setAmountIsValid(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={amountRef}
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p style={{ color: 'red' }}>Please enter a valid amount (1-10)</p>}
    </form>
  );
}
