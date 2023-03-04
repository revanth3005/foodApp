import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import db from "./assets/data.json";

function App() {
  const [cartItems, setcartItems] = useState([]);
  console.log(db);
  const addItemsToCart = (obj) => {
    const mealexist = cartItems.find((item) => item.id === obj.id);
    if (mealexist) {
      setcartItems(
        cartItems.map((item) =>
          item.id === obj.id
            ? { ...mealexist, quantity: mealexist.quantity + 1 }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...obj, quantity: 1 }]);
    }
  };
  const removeItemsInCart = (product) => {
    const mealexist = cartItems.find((item) => item.id === product.id);
    if (mealexist.quantity === 1) {
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...mealexist, quantity: mealexist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCardClereance=()=>{
    setcartItems([])
  }

  return (
    <Fragment>
      <Header cartItems={cartItems}/>
      <main>
        <Meals addItemsToCart={addItemsToCart} />
        <Cart
        handleCardClereance={handleCardClereance}
          cartItems={cartItems}
          addItemsToCart={addItemsToCart}
          removeItemsInCart={removeItemsInCart}
        />
      </main>
    </Fragment>
  );
}

export default App;