import { useState } from 'react';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };
  const hideCartHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      {isCartOpen && <Cart onCloseCart={hideCartHandler} />}
      <Header onOpenCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
