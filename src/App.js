import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemsToCart = (obj) => {
    const mealExist = cartItems.find((item) => item.id === obj.id);
    if (mealExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === obj.id
            ? { ...mealExist, quantity: mealExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...obj, quantity: 1 }]);
    }
  };
  const removeItemsInCart = (product) => {
    const mealExist = cartItems.find((item) => item.id === product.id);
    if (mealExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...mealExist, quantity: mealExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleOrderSummary = (value) => {
    if (value) {
      return setCartItems([]);
    }
  };
  const handleCardClearance = () => {
    setCartItems([]);
  };
  return (
    <Fragment>
      <Header cartItems={cartItems} />
      <main>
        <Meals addItemsToCart={addItemsToCart} cartItems={cartItems} />
        <Cart
          handleCardClearance={handleCardClearance}
          cartItems={cartItems}
          addItemsToCart={addItemsToCart}
          removeItemsInCart={removeItemsInCart}
          handleOrderSummary={handleOrderSummary}
        />
      </main>
    </Fragment>
  );
}

export default App;
