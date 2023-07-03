import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

function Backdrop({ onCloseCart }) {
  return <div className={classes.backdrop} onClick={onCloseCart}></div>;
}

function ModelOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function Modal({ children, onCloseCart }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(<ModelOverlay>{children}</ModelOverlay>, portalElement)}
    </>
  );
}
