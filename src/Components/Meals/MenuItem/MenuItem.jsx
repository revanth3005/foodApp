import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const obj = {
    name: props.name,
    price: props.price,
    id: props.id,
  };
  let qua;
  if (props.cartItems.length !== 0) {
    const quantityItem = props.cartItems.find((item) => item.id === obj.id);
    qua = quantityItem;
  }
  return (
    <div key={props.id}>
      <div className={styles.menuDiv}>
        <div>
          <h5>{props.name}</h5>
          <span>Price:{props.price}</span> <br />
          <span>{props.description}</span> <br />
        </div>
        <button
          className="btn btn-outline-dark bt1"
          onClick={() => props.addItemsToCart(obj)}
        >
          Add
          {qua && ( !qua ? null : <span>&nbsp;&nbsp;{qua.quantity}</span> )}
        </button>
      </div>
      <hr />
    </div>
  );
};

export default MenuItem;
