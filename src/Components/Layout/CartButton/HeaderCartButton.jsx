import React from "react";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({cartItems}) => {
  const num=cartItems.length

  return (
    <button
      className={styles.cartButton}
      data-bs-toggle="modal"
      data-bs-target="#myModalMD"
    >
      <span className={styles.logo}>🛒</span>
      <span className={styles.cart}>Cart</span>-
      <span className={styles.badge}>{num}</span>
    </button>
  );
};

export default HeaderCartButton;