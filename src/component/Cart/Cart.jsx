import React from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

export default function Cart({ onCloseCart }) {
  const { items, totalAmount, addItem, removeItem } = useCart();

  const hasItems = items.length > 0;

  const onAddHAndler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const onRemoveHAndler = (id) => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={()=> onRemoveHAndler(item.id)} onAdd={() => onAddHAndler(item)} />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
