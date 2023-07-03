import React, { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    let updateItems;
    if (existingCartItemIndex !== -1) {
      updateItems = [...state.items];
      updateItems[existingCartItemIndex].amount += action.item.amount;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return { items: updateItems, totalAmount: updateTotalAmount };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    if (existingCartItemIndex === -1) {
      return;
    }
    let updateItems = [...state.items];
    const updateTotalAmount = state.totalAmount - updateItems[existingCartItemIndex].price;

    if (updateItems[existingCartItemIndex].amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updateItems[existingCartItemIndex].amount -= 1;
    }

    return { items: updateItems, totalAmount: updateTotalAmount };
  }
  return defaultCartState;
};

export function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  return <CartContext.Provider value={{ items: cartState.items, totalAmount: cartState.totalAmount, addItem, removeItem }}>{children}</CartContext.Provider>;
}

export default CartContext;
